<?php

declare(strict_types=1);

namespace App\Console\Commands;

use Illuminate\Console\GeneratorCommand;

final class MakeRepository extends GeneratorCommand
{
    /**
     * Artisan コマンドの定義（引数・オプション）
     *
     * - name: 生成する Repository のクラス名（パス指定も可）
     *   例: UserRepository / Admin/UserRepository
     *
     * - --interface: Repository と対になる Interface も作る
     *   例: app/Repositories/Contracts/UserRepositoryInterface.php
     *
     * - --force: 既存ファイルがあっても上書きする
     *   ※ GeneratorCommand が標準で参照するオプション。Interface 生成側にも引き継ぐ
     */
    protected $signature = 'make:repository
        {name : Repository class name}
        {--interface : Also create repository interface}
        {--force : Overwrite existing files}';

    /**
     * `php artisan list` や help に表示される説明
     */
    protected $description = 'Create a new Repository class';

    /**
     * GeneratorCommand が内部で出力用に使う “種別名”
     * （ログに "Repository created successfully." 的に出ることがある）
     */
    protected $type = 'Repository';

    /**
     * 生成する PHP ファイルのテンプレート（stub）を返す
     *
     * 例: stubs/repository.stub を読み込み、
     *     DummyNamespace / DummyClass などを Laravel が置換してファイルを生成する。
     */
    protected function getStub(): string
    {
        return base_path('stubs/repository.stub');
    }

    /**
     * `name` 引数にクラス名だけが渡されたときに、
     * どの namespace 配下に生成するかを決める。
     *
     * 例: name=UserRepository -> App\Repositories\UserRepository
     *
     * ※ name に "Admin/UserRepository" といったパスが渡された場合は
     *    App\Repositories\Admin\UserRepository になる（GeneratorCommand が対応）
     */
    protected function getDefaultNamespace($rootNamespace): string
    {
        return $rootNamespace.'\Repositories';
    }

    /**
     * コマンドの本体
     *
     * ここでやりたいことは：
     * 1) --interface が指定されていたら、先に Interface を作る
     *    （Repository の stub が implements 参照するので、先にある方が分かりやすい）
     *
     * 2) Repository 本体は GeneratorCommand の標準処理（parent::handle）で生成する
     */
    public function handle(): int
    {
        $repoName = $this->argument('name');

        // --interface が指定されていたら、Laravel 標準 make:interface を呼び出して Interface を作成
        if ($this->option('interface')) {
            $this->makeInterfaceViaArtisan($repoName);
        }

        /**
         * Repository の生成そのものは、GeneratorCommand に任せる。
         *
         * GeneratorCommand がやってくれること：
         * - name から FQCN を決定（App\Repositories\...）
         * - ファイルパスを決定（app/Repositories/...）
         * - stub を読み込み（getStub）
         * - DummyNamespace / DummyClass などのプレースホルダを置換
         * - ファイルを書き出し
         * - 既存があって --force なしなら、上書きしない（出力は warn/err の場合あり）
         */
        $result = parent::handle();

        /**
         * GeneratorCommand の戻り値が Laravel のバージョン差や内部実装で
         * bool / int の両方になり得るケースがあるため、安全に int へ正規化して返す。
         *
         * - int ならそのまま返す（0/1）
         * - bool なら true=成功(0), false=失敗(1) に寄せる
         */
        if (is_int($result)) {
            return $result;
        }

        return $result === false ? self::FAILURE : self::SUCCESS;
    }

    /**
     * Repository のクラス内容を組み立てるフェーズで呼ばれる。
     * （stub の文字列に “追加の置換” をかけたい場合にオーバーライドする）
     *
     * 今回は stub に独自プレースホルダ {{ interface }} を用意し、
     * そこに "App\Repositories\Contracts\XxxRepositoryInterface" を埋め込みたい。
     */
    protected function buildClass($name): string
    {
        // まずは GeneratorCommand の標準置換（DummyNamespace/DummyClass など）を行った結果を受け取る
        $output = parent::buildClass($name);

        // ユーザー入力ベースで安定させる（FQCN 混入を避ける）
        $interfaceFqcn = ltrim($this->qualifyInterfaceName($this->getNameInput()), '\\');

        $output = str_replace('{{ interfaceImport }}', $interfaceFqcn, $output);
        $output = str_replace('{{ interfaceShort }}', class_basename($interfaceFqcn), $output);

        return $output;
    }

    /**
     * Laravel 標準の `make:interface` を “内部から呼ぶ” ための処理。
     *
     * ここでのポイント：
     * - make:interface は name 引数に "ディレクトリ/クラス名" を渡せる
     * - 今回の方針は Interface を Repositories/Contracts 配下に生成したいので
     *   name 引数として "Repositories/Contracts/◯◯Interface" を渡す。
     *
     * 例:
     *  php artisan make:interface Repositories/Contracts/UserRepositoryInterface
     *  -> app/Repositories/Contracts/UserRepositoryInterface.php が生成される
     */
    private function makeInterfaceViaArtisan(string $repoName): void
    {
        // サブディレクトリとファイル名を抽出
        // 例:
        // $subDir = 'Admin' or 'Admin/Auth' or ''
        // $repoBase = 'UserRepository'
        [$subDir, $repoBase] = $this->splitSubDirAndBase($repoName);

        // Interface の生成先をパス付き name として組み立てる
        // 例: Repositories/Contracts/Admin/UserRepositoryInterface
        $interfaceArg = 'Repositories/Contracts'
            .($subDir !== '' ? '/'.$subDir : '')
            .'/'.$repoBase.'Interface';

        $args = ['name' => $interfaceArg];

        if ($this->option('force')) {
            $args['--force'] = true;
        }

        $this->call('make:interface', $args);
    }

    /**
     * Repository が implements する Interface の FQCN を組み立てる。
     *
     * 例:
     * - name=UserRepository -> App\Repositories\Contracts\UserRepositoryInterface
     * - name=Admin/UserRepository -> App\Repositories\Contracts\Admin\UserRepositoryInterface
     */
    private function qualifyInterfaceName(string $repoName): string
    {
        $rootNamespace = $this->laravel->getNamespace(); // "App\"
        [$subDir, $repoBase] = $this->splitSubDirAndBase($repoName);

        // サブディレクトリを namespace 用に変換（Admin/Auth -> Admin\Auth）
        $subNs = $subDir !== '' ? '\\'.str_replace('/', '\\', $subDir) : '';

        return $rootNamespace.'Repositories\\Contracts'.$subNs.'\\'.$repoBase.'Interface';
    }

    /**
     * サブディレクトリとファイル名を抽出
     *
     * - 例: $name = Admin/UserRepository
     *    結果: [$dir=Admin, $base=UserRepository ]
     */
    private function splitSubDirAndBase(string $name): array
    {
        // \ を / に統一し、前後の / を除去
        $normalized = trim(str_replace('\\', '/', $name), '/');

        // ここが重要：FQCN でもパスでも "Repositories/..." 以降だけを取り出す
        // 例:
        // - "Admin/UserRepository"                     -> "Admin/UserRepository"
        // - "App/Repositories/Admin/UserRepository"    -> "Admin/UserRepository"
        // - "Repositories/Admin/UserRepository"        -> "Admin/UserRepository"
        $root = trim(str_replace('\\', '/', $this->laravel->getNamespace()), '/'); // 例: "App"
        $prefixes = [
            $root.'/Repositories/', // "App/Repositories/"
            'Repositories/',          // "Repositories/"
        ];

        foreach ($prefixes as $prefix) {
            if (str_starts_with($normalized, $prefix)) {
                $normalized = substr($normalized, strlen($prefix));
                $normalized = trim($normalized, '/');
                break;
            }
        }

        // 例: "Admin/UserRepository" -> ["Admin", "UserRepository"]
        $dir = trim(dirname($normalized), '.');
        $base = basename($normalized);

        if ($dir === '.' || $dir === '') {
            $dir = '';
        }

        return [$dir, $base];
    }
}

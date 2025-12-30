<?php

declare(strict_types=1);

use Illuminate\Support\Facades\File;

beforeEach(function () {
    $this->originalAppPath = $this->app->path();

    $this->tmpBase = storage_path('framework/testing/make-repository-'.uniqid());
    $this->tmpAppPath = $this->tmpBase.'/app';

    File::ensureDirectoryExists($this->tmpAppPath);

    // 生成先をテスト用に切り替え（Repository も Interface もここに生成される）
    $this->app->useAppPath($this->tmpAppPath);
});

afterEach(function () {
    if (isset($this->tmpBase)) {
        File::deleteDirectory($this->tmpBase);
    }
    if (isset($this->originalAppPath)) {
        $this->app->useAppPath($this->originalAppPath);
    }
});

it('Repository と Interface が同じ階層構造で生成される', function () {
    $this->artisan('make:repository', [
        'name' => 'Admin/UserRepository',
        '--interface' => true,
    ])->assertExitCode(0);

    $repoPath = $this->tmpAppPath.'/Repositories/Admin/UserRepository.php';
    $ifacePath = $this->tmpAppPath.'/Repositories/Contracts/Admin/UserRepositoryInterface.php';

    expect(File::exists($repoPath))->toBeTrue();
    expect(File::exists($ifacePath))->toBeTrue();

    $repo = File::get($repoPath);
    $iface = File::get($ifacePath);

    // Repository 側
    expect($repo)->toContain('namespace App\Repositories\Admin;')
        ->toContain('use App\Repositories\Contracts\Admin\UserRepositoryInterface;')
        ->toContain('final class UserRepository')
        ->toContain('implements UserRepositoryInterface');

    // Interface 側（Laravel 標準 make:interface の生成結果）
    expect($iface)->toContain('namespace App\Repositories\Contracts\Admin;')
        ->toContain('interface UserRepositoryInterface');
});

it('--interface を付けないと Repository のみ生成される', function () {
    $this->artisan('make:repository', [
        'name' => 'UserRepository',
    ])->assertExitCode(0);

    $repoPath = $this->tmpAppPath.'/Repositories/UserRepository.php';
    $ifacePath = $this->tmpAppPath.'/Repositories/Contracts/UserRepositoryInterface.php';

    expect(File::exists($repoPath))->toBeTrue();
    expect(File::exists($ifacePath))->toBeFalse();
});

it('深い階層でも Repository と Interface の階層が連動する', function () {
    $this->artisan('make:repository', [
        'name' => 'Admin/Auth/UserRepository',
        '--interface' => true,
    ])->assertExitCode(0);

    $repoPath = $this->tmpAppPath.'/Repositories/Admin/Auth/UserRepository.php';
    $ifacePath = $this->tmpAppPath.'/Repositories/Contracts/Admin/Auth/UserRepositoryInterface.php';

    expect(File::exists($repoPath))->toBeTrue();
    expect(File::exists($ifacePath))->toBeTrue();

    $repo = File::get($repoPath);
    expect($repo)->toContain('namespace App\Repositories\Admin\Auth;')
        ->toContain('use App\Repositories\Contracts\Admin\Auth\UserRepositoryInterface;')
        ->toContain('final class UserRepository')
        ->toContain('implements UserRepositoryInterface');

    $iface = File::get($ifacePath);
    expect($iface)->toContain('namespace App\Repositories\Contracts\Admin\Auth;');
});

it('--force が Interface 生成にも伝播する（上書きされる）', function () {
    $this->artisan('make:repository', [
        'name' => 'Admin/UserRepository',
        '--interface' => true,
    ])->assertExitCode(0);

    $ifacePath = $this->tmpAppPath.'/Repositories/Contracts/Admin/UserRepositoryInterface.php';

    // 追記して「上書きされたか」を検証する
    File::append($ifacePath, "\n// touched\n");
    $before = File::get($ifacePath);
    expect($before)->toContain('// touched');

    // --force で再生成
    $this->artisan('make:repository', [
        'name' => 'Admin/UserRepository',
        '--interface' => true,
        '--force' => true,
    ])->assertExitCode(0);

    $after = File::get($ifacePath);

    // 再生成されていれば追記は消えるはず
    expect($after)->not->toContain('// touched')
        ->toContain('interface UserRepositoryInterface');
});

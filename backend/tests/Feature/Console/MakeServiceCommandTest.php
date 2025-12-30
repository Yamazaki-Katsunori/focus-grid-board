<?php

declare(strict_types=1);

use Illuminate\Support\Facades\File;

beforeEach(function () {
    $this->originalAppPath = $this->app->path();

    $this->tmpBase = storage_path('framework/testing/make-service-'.uniqid());
    $this->tmpAppPath = $this->tmpBase.'/app';

    File::ensureDirectoryExists($this->tmpAppPath);

    // 生成先をテスト用に切り替え（本物の app/ を汚さない）
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

it('make:service で Services 配下にファイルが生成される', function () {
    $this->artisan('make:service', ['name' => 'UserService'])
        ->assertExitCode(0);

    $path = $this->tmpAppPath.'/Services/UserService.php';

    expect(File::exists($path))->toBeTrue();

    $content = File::get($path);

    expect($content)->toContain('namespace App\Services;')
        ->toContain('final class UserService');
});

it('サブディレクトリ指定でも生成される', function () {
    $this->artisan('make:service', ['name' => 'Auth/LoginService'])
        ->assertExitCode(0);

    $path = $this->tmpAppPath.'/Services/Auth/LoginService.php';

    expect(File::exists($path))->toBeTrue();

    $content = File::get($path);

    expect($content)->toContain('namespace App\Services\Auth;')
        ->toContain('final class LoginService');
});

/**
 * 既存ファイルがある場合の exit code は Laravel の make 系と同様に 0 のことが多いので、
 * “上書きされない” を mtime で検証する（安定）
 */
it('同名が存在すると上書きされない（force なし）', function () {
    $this->artisan('make:service', ['name' => 'UserService'])
        ->assertExitCode(0);

    $path = $this->tmpAppPath.'/Services/UserService.php';
    $mtime1 = filemtime($path);

    sleep(1);

    $this->artisan('make:service', ['name' => 'UserService'])
        ->assertExitCode(0);

    $mtime2 = filemtime($path);

    expect($mtime2)->toBe($mtime1);
});

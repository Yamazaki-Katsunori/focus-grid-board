<?php

declare(strict_types=1);

use Illuminate\Support\Facades\File;

beforeEach(function () {
    $this->originalAppPath = $this->app->path();

    $this->tmpBase = storage_path('framework/testing/make-usecase-'.uniqid());

    $this->tmpAppPath = $this->tmpBase.'/app';

    File::ensureDirectoryExists($this->tmpAppPath);

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

it('make:usecase で UseCases 配下にファイルが生成される', function () {
    $this->artisan('make:usecase', ['name' => 'CreateUserUseCase'])->assertExitCode(0);

    $path = $this->tmpAppPath.'/UseCases/CreateUserUseCase.php';

    expect(File::exists($path))->toBeTrue();

    $content = File::get($path);

    expect($content)->toContain('namespace App\UseCases')->toContain('final class CreateUserUseCase')->toContain('public function execute(): void');

});

it('サブディレクトリ指定でも生成される', function () {
    $this->artisan('make:usecase', ['name' => 'Auth/LoginUseCase'])
        ->assertExitCode(0);

    $path = $this->tmpAppPath.'/UseCases/Auth/LoginUseCase.php';

    expect(File::exists($path))->toBeTrue();

    $content = File::get($path);

    expect($content)->toContain('namespace App\UseCases\Auth;')
        ->toContain('final class LoginUseCase');
});

it('同名が存在すると失敗する（force なし）', function () {
    $this->artisan('make:usecase', ['name' => 'CreateUserUseCase'])
        ->assertExitCode(0);

    $path = $this->tmpAppPath.'/UseCases/CreateUserUseCase.php';
    $firstMtime = filemtime($path);

    usleep(200_000);

    $this->artisan('make:usecase', ['name' => 'CreateUserUseCase'])
        ->expectsOutputToContain('already exists')
        ->assertExitCode(0);

    $secondMtime = filemtime($path);

    expect($secondMtime)->toBe($firstMtime);
});

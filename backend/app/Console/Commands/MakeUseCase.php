<?php

declare(strict_types=1);

namespace App\Console\Commands;

use Illuminate\Console\GeneratorCommand;

final class MakeUseCase extends GeneratorCommand
{
    protected $name = 'make:usecase';

    protected $description = 'Create a new UseCase class';

    protected $type = 'UseCase';

    protected function getStub(): string
    {
        return base_path('stubs/usecase.stub');
    }

    protected function getDefaultNamespace($rootNamespace): string
    {
        return $rootNamespace.'\UseCases';
    }
}

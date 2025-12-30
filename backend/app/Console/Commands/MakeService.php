<?php

declare(strict_types=1);

namespace App\Console\Commands;

use Illuminate\Console\GeneratorCommand;

final class MakeService extends GeneratorCommand
{
    protected $name = 'make:service';

    protected $description = 'Create a new Service class';

    protected $type = 'Service';

    protected function getStub(): string
    {
        return base_path('stubs/service.stub');
    }

    protected function getDefaultNamespace($rootNamespace): string
    {
        // 要件どおり app/Service
        return $rootNamespace.'\Services';
    }
}

<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('focus_task_tag', function (Blueprint $table) {
            $table->foreignId('task_id')->constrained('focus_tasks')->restrictOnDelete()->comment('外部キー : タスクID');
            $table->foreignId('tag_id')->constrained('focus_tags')->restrictOnDelete()->comment('外部キー : タグID');
            $table->timestampTz('created_at');
            $table->unique(['task_id', 'tag_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('focus_task_tag');
    }
};

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
        Schema::create('focus_categories', function (Blueprint $table) {
            $table->id()->comment('内部参照ID');
            $table->char('unique_id', 26)->unique()->comment('外部参照ID / ULID');
            $table->foreignId('user_id')->constrained('users')->restrictOnDelete()->comment('外部キー : ユーザー');
            $table->string('name')->comment('カテゴリー名');
            $table->timestampsTz();

            $table->unique(['user_id', 'name']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('focus_categories');
    }
};

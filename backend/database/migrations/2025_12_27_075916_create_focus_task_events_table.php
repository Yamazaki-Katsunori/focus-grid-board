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
        Schema::create('focus_task_events', function (Blueprint $table) {
            $table->id()->comment('内部参照ID');
            $table->char('unique_id', 26)->unique()->comment('外部参照ID / ULID');

            $table->foreignId('task_id')->constrained('focus_tasks')->restrictOnDelete()->comment('外部キー : タスクID');
            $table->foreignId('user_id')->constrained('users')->restrictOnDelete()->comment('外部キー : ユーザーID');

            $table->string('type', 64)->comment('イベント種別');
            $table->jsonb('payload')->nullable()->comment('イベント詳細');
            $table->timestampTz('occurred_at')->comment('イベント発生日時');

            $table->timestampTz('created_at')->useCurrent()->comment('作成日時');
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('focus_task_events');
    }
};

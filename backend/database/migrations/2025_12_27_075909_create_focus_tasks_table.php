<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('focus_tasks', function (Blueprint $table) {
            $table->id()->comment('内部参照ID');
            $table->char('unique_id', 26)->unique()->comment('外部参照ID / ULID');

            $table->foreignId('user_id')->constrained('users')->restrictOnDelete();
            $table->foreignId('category_id')->constrained('focus_categories')->restrictOnDelete();

            $table->string('title')->comment('タスクタイトル');
            $table->text('description')->nullable()->comment('タスク本文');

            $table->string('status', 32)->comment('タスクステータス / CHECK: backlog|todo|doing|blocked|done|archived|pending');
            $table->string('quadrant', 32)->comment('タスク4象限 / CHECK: q1|q2|q3|q4');
            $table->string('priority', 32)->comment('タスク優先度 / CHECK: low|normal|high');

            $table->integer('sort_order')->comment('reorderは 10刻みで採番');
            $table->integer('lock_version')->default(0)->comment('楽観的ロック / default: 0');

            $table->date('scheduled_start_date')->comment('タスク着手予定日');
            $table->date('scheduled_end_date')->comment('タスク終了予定日');

            $table->timestampTz('completed_at')->nullable()->comment('タスク完了日');
            $table->timestampTz('archived_at')->nullable()->comment('タスクのアーカイブ日');

            $table->timestampsTz();

            $table->index(['user_id', 'status', 'sort_order']);
            $table->index(['user_id', 'quadrant']);
            $table->index(['user_id', 'category_id']);
        });

        DB::statement(<<<'SQL'
    ALTER TABLE focus_tasks
    ADD CONSTRAINT focus_tasks_status_check
    CHECK (status IN ('backlog','todo','doing','blocked','done','archived','pending'))
SQL);

        DB::statement(<<<'SQL'
    ALTER TABLE focus_tasks
    ADD CONSTRAINT focus_tasks_quadrant_check
    CHECK (quadrant IN ('q1','q2','q3','q4'))
SQL);

        DB::statement(<<<'SQL'
    ALTER TABLE focus_tasks
    ADD CONSTRAINT focus_tasks_priority_check
    CHECK (priority IN ('low','normal','high'))
SQL);

        DB::statement(<<<'SQL'
    ALTER TABLE focus_tasks
    ADD CONSTRAINT focus_tasks_schedule_range_check
    CHECK (scheduled_start_date <= scheduled_end_date)
SQL);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('focus_task');
    }
};

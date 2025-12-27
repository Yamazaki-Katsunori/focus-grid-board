<?php

declare(strict_types=1);

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class FocusTagsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $userId = DB::table('users')->where('email', 'dev@example.com')->value('id');
        $tags = ['仕様', '設計', '実装', 'テスト', 'レビュー'];

        DB::table('focus_tags')->insert(
            array_map(fn ($name) => [
                'unique_id' => (string) Str::ulid(),
                'user_id' => $userId,
                'name' => $name,
                'color' => null,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ], $tags)
        );
    }
}

<?php

declare(strict_types=1);

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class FocusCategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $userId = DB::table('users')->where('email', 'dev@example.com')->value('id');

        DB::table('focus_categories')->insert([
            [
                'unique_id' => (string) Str::ulid(),
                'user_id' => $userId,
                'name' => '未分類',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'unique_id' => (string) Str::ulid(),
                'user_id' => $userId,
                'name' => '学習',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'unique_id' => (string) Str::ulid(),
                'user_id' => $userId,
                'name' => '仕事',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
        ]);
    }
}

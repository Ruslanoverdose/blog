<?php

use Illuminate\Support\Str;
use Illuminate\Support\I;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ArticlesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 0; $i < 6; $i++) {
            DB::table('articles')->insert([
                'title' => Str::random(20),
                'shortText' => Str::random(150),
                'fullText' => Str::random(500),
                'cover' => Str::random(10).".jpg",
                'user_id' => rand(1,10),
                'category_id' => rand(1,10),
                'enable' => 1,
                'dateEnabled' => date("Y-m-d H:i:s")
            ]);
        }
        
    }
}

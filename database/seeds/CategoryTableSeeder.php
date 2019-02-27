<?php

use Illuminate\Support\Str;
use Illuminate\Support\I;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class CategoryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 0; $i < 20; $i++) {
            DB::table('categories')->insert([
                'title' => Str::random(15),
            ]);
        }
    }
}

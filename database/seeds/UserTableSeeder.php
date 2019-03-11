<?php

use Illuminate\Support\Str;
use Illuminate\Support\I;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 0; $i < 10; $i++) {
            DB::table('users')->insert([
                'login' => Str::random(15),
                'FirstName' => Str::random(15),
                'LastName' => Str::random(15),
                'email' => Str::random(10)."@gmail.com",
                'password' => Str::random(10,20),
                'about' => Str::random(60),
                'role_id' => rand(1,2),
                'vk' => "http://vk.com/".Str::random(10),
                'instagram' => "http://instagram.com/".Str::random(10),
                'telegram' => "http://telegram.com/".Str::random(10),
                'twitter' => "http://twitter.com/".Str::random(10),
                'googleplus' => "http://googleplus.com/".Str::random(10),
                'facebook' => "http://facebook.com/".Str::random(10),
            ]);
        }
    }
}

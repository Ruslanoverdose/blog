<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    //
    public function Category() {
        return this->hasOne('App\Category', 'foreign_key');
    }
}

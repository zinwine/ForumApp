<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use App\User;

class Question extends Model
{
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function replies()
    {
        return $this->hsaMany(Reply::class);
    }

    public function category()
    {
        return $this->belongsTo(Reply::class);
    }
}

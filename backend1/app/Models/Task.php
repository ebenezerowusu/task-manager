<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $fillable = [
        'user_id', 
        'title',
        'description',
        'priority', 
        'status', 
        'deadline'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    
}

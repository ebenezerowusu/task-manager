<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    protected $casts = [
        'deadline' => 'date:Y-m-d',
    ];
    
    protected $dates = ['deadline'];
    

    protected $fillable = [
        'title',
        'description',
        'priority',
        'status',
        'deadline',
        'user_id'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

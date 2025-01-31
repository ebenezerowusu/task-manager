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

    /**
     * Get the user that owns the task.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        // Define the relationship between Task and User models
        return $this->belongsTo(User::class);
    }
}

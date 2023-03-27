<?php

namespace App\Models\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $table = 'tasks';

    protected $fillable = ['title', 'completed', 'description'];
    
    public function index()
    {
        $tasks = Task::all();
        
        return view('tasks', ['tasks' => $tasks]);
    }

    use HasFactory;
}

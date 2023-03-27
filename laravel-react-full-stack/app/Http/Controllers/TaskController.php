<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Models\Task;
use App\Http\Controllers\Controller;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $tasks = Task::all();
        
        return response()->json($tasks);
    }
 
    /**
 * Store a newly created resource in storage.
 */
public function store(Request $request)
{

    $task = new Task;

    $task->title = $request->title;
    $task->description = $request->description;
    $task->status = $request->status;

    $task->save();
    
    return response()->json('Created correctly');
}
    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $task = Task::findorFail($id);
    
        if ($task) {
            return response()->json($task);;
        }
    }
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $task = Task::find($id);


        $task->update($request->all());

        return response()->json('Updated correctly');
    }
    

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $task = Task::findOrFail($id);

        $task->delete();

        return response()->json('Deleted correctly');

    }
}

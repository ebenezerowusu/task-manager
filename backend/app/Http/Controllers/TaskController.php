<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum');
    }

    public function index(Request $request)
    {
        $tasks = $request->user()->tasks()
            ->when($request->priority, fn($q) => $q->where('priority', $request->priority))
            ->when($request->status, fn($q) => $q->where('status', $request->status))
            ->when($request->deadline, fn($q) => $q->where('deadline', '<=', $request->deadline))
            ->get();

        return response()->json(['data' => $tasks]);
    }

    public function show(Task $task)
    {
        return response()->json(['data' => $task]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'priority' => 'required|in:Low,Medium,High',
            'status' => 'required|in:New,In-Progress,Completed,Cancelled,Done,Archived,Pending',
            'deadline' => 'required|date_format:Y-m-d',
        ]);

        $validated['deadline'] = \Carbon\Carbon::parse($validated['deadline']);

        $task = $request->user()->tasks()->create($validated);

        return response()->json(['data' => $task], 201);
    }

    public function update(Request $request, Task $task)
    {
        $this->authorize('update', $task);

        $validated = $request->validate([
            'title' => 'sometimes|string|max:255',
            'description' => 'nullable|string',
            'priority' => 'sometimes|in:Low,Medium,High',
            'status' => 'sometimes|in:New,In-Progress,Completed,Cancelled,Archived,Pending',
            'deadline' => 'required|date_format:Y-m-d',
        ]);
        
        $validated['deadline'] = \Carbon\Carbon::parse($validated['deadline']);

        $task->update($validated);

        return response()->json(['data' => $task]);
    }

    public function destroy(Task $task)
    {
        $this->authorize('delete', $task);
        $task->delete();
        return response()->noContent();
    }

    public function getPriorities()
    {
        return response()->json([
            'data' => ['Low', 'Medium', 'High']
        ]);
    }

    public function getStatuses()
    {
        return response()->json([
            'data' => ['New', 'In-Progress', 'Completed', 'Cancelled','Archived','Pending']
        ]);
    }
}

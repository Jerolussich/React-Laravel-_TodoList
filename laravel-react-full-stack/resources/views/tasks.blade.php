<!-- resources/views/tasks.blade.php -->

<table>
    <thead>
        <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Created At</th>
            <th>Updated At</th>
            <th>Status</th>
        </tr>
    </thead>
    <tbody>
        @foreach ($tasks as $task)
        <tr>
                <td>{{ $task->id }}</td>
                <td>{{ $task->title }}</td>
                <td>{{ $task->description }}</td>
                <td>{{ $task->created_at }}</td>
                <td>{{ $task->updated_at }}</td>
                <td>{{ $task->completed}}</td>
                <td><button>Edit Task</button></td>
        @endforeach
    </tbody>
</table>

import { Component } from '@angular/core';

interface Task {
  description: string;
  done: boolean;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  tasks: Task[] = [];
  newTask: string = '';

  addTask(): void {
    if (this.newTask.trim() !== '') {
      const task: Task = {
        description: this.newTask,
        done: false
      };
      this.tasks.push(task);
      this.newTask = '';
    }
  }

  updateTask(task: Task): void {
    task.done = !task.done;
  }

  deleteTask(task: Task): void {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }
}

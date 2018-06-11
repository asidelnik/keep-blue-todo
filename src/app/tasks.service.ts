import { Injectable } from '@angular/core';
import { User } from './user-model';
import { Task } from './task-model';


@Injectable({
    providedIn: 'root'
})
export class TasksService {
    tasks: Task[] = [{ title: "Purchase groceries" }, { title: "Complete homework" }, { title: "Clean the kitchen" }];

    constructor() { }

    getTasks(): Task[] {
        return this.tasks;
    }

    addTask(newTask: Task) {
        this.tasks.push(newTask);
    }


}

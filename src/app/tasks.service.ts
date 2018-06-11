import { Injectable } from '@angular/core';
import { User } from './user-model';
import { Task } from './task-model';


@Injectable({
    providedIn: 'root'
})
export class TasksService {
    tasks: Task[] = [{ title: "Purchase groceries", _id: 1 }, { title: "Complete homework", _id: 2 }, { title: "Clean the kitchen", _id: 3 }];

    constructor() { }

    getTasks(): Task[] {
        return this.tasks;
    }

    addTask(newTask: Task) {
        // console.log("service");
        // console.log(newTask);
        this.tasks.push(newTask);
    }

    deleteTask(taskId) {
        
    }


}

import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { User } from '../user-model';
import { Task } from '../task-model';


@Component({
    selector: 'app-tasks-all',
    templateUrl: './tasks-all.component.html',
    styleUrls: ['./tasks-all.component.css']
})
export class TasksAllComponent implements OnInit {
    tasks: Task[] = [];

    constructor(private tasksService: TasksService) { }

    ngOnInit() {
        this.tasks = this.tasksService.tasks;
    }

}

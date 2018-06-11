import { Component, OnInit, Input } from '@angular/core';
import { TasksService } from '../tasks.service';
import { Task } from '../task-model';


@Component({
    selector: 'app-add-task',
    templateUrl: './add-task.component.html',
    styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

    task: Task = new Task();

    constructor(private tasksService: TasksService) { }

    ngOnInit() {
    }

    addTask() {
        this.tasksService.addTask(this.task);
        this.task = new Task();
    }

}

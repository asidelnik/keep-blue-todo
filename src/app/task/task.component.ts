import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task-model';


@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

    @Input() task: Task = new Task();
    @Output() deleteTaskEmit: EventEmitter<Task> = new EventEmitter();
    constructor() { }

    ngOnInit() {
    }

    deleteTask(id) {
        this.deleteTaskEmit.emit(id);
    }

}

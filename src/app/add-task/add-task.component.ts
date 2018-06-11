import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task-model';


@Component({
    selector: 'app-add-task',
    templateUrl: './add-task.component.html',
    styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

    // @Input() movie: Task = new Task();
    movie: Task = new Task();
    // @Output() open: EventEmitter<any> = new EventEmitter();
    @Output() addTaskEmitter: EventEmitter<Task> = new EventEmitter();


    constructor() { }

    ngOnInit() {
    }

    addTask(newTask: Task) {
        if (newTask) {
            this.addTaskEmitter.emit(newTask);
        }
    }

}

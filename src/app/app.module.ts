import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';



import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CompletedComponent } from './completed/completed.component';
import { TaskComponent } from './task/task.component';
import { TasksAllComponent } from './tasks-all/tasks-all.component';
import { MakeTaskComponent } from './make-task/make-task.component';
import { AddTaskComponent } from './add-task/add-task.component';

@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        CompletedComponent,
        TaskComponent,
        TasksAllComponent,
        MakeTaskComponent,
        AddTaskComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatListModule,
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatCheckboxModule,
        MatInputModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
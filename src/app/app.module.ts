import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CompletedComponent } from './completed/completed.component';
import { TaskComponent } from './task/task.component';
import { TasksAllComponent } from './tasks-all/tasks-all.component';
import { MakeTaskComponent } from './make-task/make-task.component';

@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        CompletedComponent,
        TaskComponent,
        TasksAllComponent,
        MakeTaskComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatListModule,
        MatButtonModule,
        MatIconModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
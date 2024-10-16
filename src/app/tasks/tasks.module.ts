import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskComponent } from './task/task.component';
import { TasksComponent } from './tasks.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TasksComponent,
    TaskComponent,
    AddTaskComponent],
  exports: [TasksComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ]
})
export class TasksModule { }

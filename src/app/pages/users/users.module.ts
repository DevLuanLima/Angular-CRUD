import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './users.component';
import { ListComponent } from './list/list/list.component';
import { AddEditComponent } from './add/add-edit/add-edit.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UsersRoutingModule
],
declarations: [
    UsersComponent,
    ListComponent,
    AddEditComponent
]
})
export class UsersModule { }

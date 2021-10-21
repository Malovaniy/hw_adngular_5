import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { WorksComponent } from './works/works.component';
import { CensorComponent } from './works/censor/censor.component';
import { PhonebookComponent } from './works/phonebook/phonebook.component';
import { UserslistComponent } from './works/userslist/userslist.component';
import { TasklistComponent } from './works/tasklist/tasklist.component';
import { TaskHeaderComponent } from './works/tasklist/task-header/task-header.component';
import { TaskHomeComponent } from './works/tasklist/task-home/task-home.component';
import { TaskTableComponent } from './works/tasklist/task-table/task-table.component';

const routes: Routes = [
  { path: ``, component: HomeComponent },
  { path: `works`, component: WorksComponent},
  { path: `works/censor`, component: CensorComponent },
  { path: `works/userslist`, component: UserslistComponent },
  { path: `works/tasklist`, component: TasklistComponent },
  { path: `works/phonebook`, component: PhonebookComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

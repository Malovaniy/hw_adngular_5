import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { WorksComponent } from './works/works.component';
import { CensorComponent } from './works/censor/censor.component';
import { SearchPipe } from './works/phonebook/search.pipe';
import { PhonebookComponent } from './works/phonebook/phonebook.component';
import { UserslistComponent } from './works/userslist/userslist.component';
import { TasklistComponent } from './works/tasklist/tasklist.component';
import { TaskHeaderComponent } from './works/tasklist/task-header/task-header.component';
import { TaskHomeComponent } from './works/tasklist/task-home/task-home.component';
import { TaskTableComponent } from './works/tasklist/task-table/task-table.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorksComponent,
    CensorComponent,
    UserslistComponent,
    TasklistComponent,
    PhonebookComponent,
    HeaderComponent,
    SearchPipe,
    TaskHeaderComponent,
    TaskHomeComponent,
    TaskTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

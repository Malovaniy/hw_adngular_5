import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/shared/interface/userhw3.interface';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss']
})
export class TaskHomeComponent implements OnInit {

  public string: string = ``
  public arrUsers: Array<IUser> = [
    {id:  1,
      task: 'HTML5',
      check: false,
      progres: 'In Progres'
    },
    {id: 2,
      task: 'Css',
      check: true,
      progres: 'done'
    },
    {id: 3,
      task: 'Sass',
      check: true,
      progres: 'done'
    }
    
    
  ]
  public number: number = this.arrUsers.length

  constructor() { }

  ngOnInit(): void {
  }
  addValue():void{
    const user= {
      id: this.arrUsers.length+1,
      task: this.string,
      check: false,
      progres: 'In Progres'
      
    }
    if (user.task !=``) {
      this.arrUsers.push(user)
    }
    this.string = ``
    this.number = this.arrUsers.length
      
  }
  getData(data:number):void{
    this.number= data
  }
 

}

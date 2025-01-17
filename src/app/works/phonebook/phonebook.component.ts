import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/shared/interface/userhw4.interface';

@Component({
  selector: 'app-phonebook',
  templateUrl: './phonebook.component.html',
  styleUrls: ['./phonebook.component.scss']
})
export class PhonebookComponent implements OnInit {
  public num!: number
  public reg = /^0\d{9}$/
  public firstName: string = ``
  public lastName: string = ``
  public number!: string
  
  public obj={
    cenzor: '/works/censor',
    user: '/works/userslist',
    task: '/works/tasklist',
    phone: '/works/phonebook',
  }

  public bool =false
  public isTrue: boolean = false
  public isFalse = false
  public field!: string
  public arrUser: Array<IUser> = [
    {
      fname: 'Petia',
      sname: 'zhuk',
      number: `0633333362`
    },
    {
      fname: 'ivan',
      sname: 'stepiv',
      number: `0634434353`
    },
    {
      fname: 'sveta',
      sname: 'orlova',
      number: `0634434353`
    },
    {
      fname: 'ira',
      sname: 'pavina',
      number: `0634434353`
    },
    {
      fname: 'sasha',
      sname: 'zalizo',
      number: `0634434353`
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }
  changer(): void {
    this.isTrue = !this.isTrue
  }

  save(): void {
    let isRegTrue = this.reg.test(this.number);
    if (this.isFalse && isRegTrue && this.firstName != `` && this.lastName != ``) {
      this.arrUser[this.num].fname = this.firstName
      this.arrUser[this.num].sname = this.lastName
      this.arrUser[this.num].number = this.number
      this.changer()
      this.firstName = ``
      this.lastName = ``
      this.number = ``
      this.isFalse = false
    }
    else {
      if (isRegTrue && this.firstName != `` && this.lastName != ``) {
        let obj: IUser = {
          fname: this.firstName,
          sname: this.lastName,
          number: this.number
        }
        this.arrUser.push(obj)
        this.changer()
        this.firstName = ``
        this.lastName = ``
        this.number = ``
      }
      else {
        alert(`Перевірте чи заповнені усі поля та правельність номера. Номер повинен починатися з 0!`)
      }
    }
  }

  deleteUs(i: number): void {
    this.arrUser.splice(i, 1)
  }
  editUs(i: number): void {
    this.isTrue = !this.isTrue
    this.firstName = this.arrUser[i].fname
    this.lastName = this.arrUser[i].sname
    this.number = this.arrUser[i].number
    this.isFalse = true
    this.num = i
  }

  sortArr(id:any):void{    
    this.arrUser.reverse()
    this.bool = !this.bool
  }
  valv(valv:string):string{
    return valv
  }
}

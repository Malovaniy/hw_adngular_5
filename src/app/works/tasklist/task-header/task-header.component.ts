import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-header',
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.scss']
})
export class TaskHeaderComponent implements OnInit {
  @Input() arrLength!: number
  public number!: number

  constructor() { }

  ngOnInit(): void {
    this.arrLength
  }

}


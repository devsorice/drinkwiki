import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit 
{
  @Input() active:number;
  @Output() onActiveChange: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() 
  {
  }

  setactive(active:number)
  {
     this.active = active;
     this.onActiveChange.emit(active);
  }

}

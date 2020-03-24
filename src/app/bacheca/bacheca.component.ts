import { Component, OnInit,Input,Output, EventEmitter} from '@angular/core';

import { Drink } from '../drink';
import { LoaddrinkService } from '../loaddrink.service';

@Component({
  selector: 'app-bacheca',
  templateUrl: './bacheca.component.html',
  styleUrls: ['./bacheca.component.css']
})
export class BachecaComponent implements OnInit {
  
  @Input() active:number;
  @Input() drinkc:Array<Array<Drink>>;
  @Input() drinks:Array<Drink>;
  @Output() onViewDrink: EventEmitter<any> = new EventEmitter<any>();
  

  constructor() 
  { 
   
  }

  public setactive(v:number)
  {
    this.active = v;
  }

  viewdrink(v:number)
  {
    this.onViewDrink.emit(v);
  }


  ngOnInit() 
  {   
  }
   

  
}

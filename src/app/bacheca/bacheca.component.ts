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
  @Output() onViewDrink: EventEmitter<any> = new EventEmitter<any>();
  
  drinkc: Array<Array<Drink>>;
  loaddrink: LoaddrinkService = new LoaddrinkService();
  

  public setactive(v:number)
  {
    this.active = v;
  }

  viewdrink(v:number)
  {
    this.onViewDrink.emit(v);
  }


  constructor() { }

  
  ngOnInit() 
  {   
    this.drinkc = this.loaddrink.getDrinkInfo();
  }
   

  
}

import { Component, OnInit,EventEmitter,Output, Input} from '@angular/core';
import { Drink } from '../drink';
import { Drinkdata } from '../drinkdata';
import { LoaddrinkService } from '../loaddrink.service';

@Component({
  selector: 'app-viewdrink',
  templateUrl: './viewdrink.component.html',
  styleUrls: ['./viewdrink.component.css']
})
export class ViewdrinkComponent implements OnInit {

  @Output() bckhome: EventEmitter<any> = new EventEmitter<any>();
  @Input() iddrink:number;
  
  loaddrink: LoaddrinkService = new LoaddrinkService();
  
  drinks: Array<Drink>;
  drinksdata: Array<Drinkdata>;

  constructor() { }

  ngOnInit()
   { 
      this.drinks = this.loaddrink.getDrinks();
      this.drinksdata = this.loaddrink.getDrinkData();
   }

  backhome()
  {
    this.bckhome.emit();
   }


}

import { Component, OnInit,EventEmitter,Output, Input} from '@angular/core';
import { Drink } from '../drink';
import { Drinkdata } from '../drinkdata';
import { LoaddrinkService } from '../loaddrink.service';

@Component({
  selector: 'app-viewdrink',
  templateUrl: './viewdrink.component.html',
  styleUrls: ['./viewdrink.component.css']
})
export class ViewdrinkComponent implements OnInit 
{

  @Output() bckhome: EventEmitter<any> = new EventEmitter<any>();
  @Input() iddrink:number;
  @Input() drinks: Array<Drink>;
  @Input() drinksdata: Array<Drinkdata>;
  @Input() active:boolean;
  
  constructor() 
  {
  }

  ngOnInit()
  { 
      
  }

  backhome()
  {
    this.bckhome.emit();
  }


}

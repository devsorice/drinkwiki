import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Drink } from '../drink';

@Component({
  selector: 'app-drinkbox',
  templateUrl: './drinkbox.component.html',
  styleUrls: ['./drinkbox.component.css']
})
export class DrinkboxComponent implements OnInit {

  @Input() drink: Drink;
  @Output() onDrinkImgClick: EventEmitter<any> = new EventEmitter<any>();
 
  ngOnInit() {

  
  }

 
  openDrink(id:number)
  {
    this.onDrinkImgClick.emit(id);
  }
}

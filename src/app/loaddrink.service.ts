import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Drink} from './drink';
import { Drinkdata } from './drinkdata';

@Injectable({
  providedIn: 'root'
})
export class LoaddrinkService 
{
  drinks: Array<Drink>;
  drinksdata: Array<Drinkdata>;
  drinkc: Array<Array<Drink>>;
  drinkUrl = 'assets/json/cocktails.json';
  loaded: boolean = false;


  public  getDrinkInfo()
  {
      return this.drinkc;
  }

  public  getDrinks()
  {
      return this.drinks;
  }

  public getDrinkData()
  {
     return this.drinksdata;
  }


    constructor(private http: HttpClient)
    {
      this.drinkc = [];
      this.drinksdata = [];
      this.drinks = [];
      
      let json = http.get(this.drinkUrl)
      .subscribe(response=> {
     
          
      this.drinks = response[0];  

      this.drinkc = new Array<Array<Drink>>();
      this.drinkc[0] = new Array<Drink>();
      this.drinkc[1] = new Array<Drink>();
      this.drinkc[2] = new Array<Drink>();
      this.drinkc[3] = new Array<Drink>();
    
      for(let drink of this.drinks)
      {
        this.drinkc[drink.categoria].push(drink);
      }

      this.drinksdata=response[1];
      this.loaded=true;
    
      });
    

    }

    
   

}

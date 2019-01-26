import { Component } from '@angular/core';
import * as $ from 'jquery';
import { LoaddrinkService } from './loaddrink.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'cocktails';
  

  active:number=2;
  viewingdrink:number=2;

  ngOnInit() 
  {
    //let service = new LoaddrinkService();  
  }
  

  setactive(v:number)
  {
    this.active = v;
  }

  viewdrink(v:number)
  {
    this.viewingdrink = v;
    //$("#pag1").transition('horizontal flip');
   
    $("#listadrink").fadeOut();
    $("#viewdrink").fadeIn();
  }

  listdrink()
  {
    //$("#pag1").transition('horizontal flip');
    $("#viewdrink").fadeOut();
    $("#listadrink").fadeIn();
  }
}

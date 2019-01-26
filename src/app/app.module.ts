import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DescrizioneComponent } from './descrizione/descrizione.component';
import { BachecaComponent } from './bacheca/bacheca.component';
import { FooterComponent } from './footer/footer.component';
import { DrinkboxComponent } from './drinkbox/drinkbox.component';
import { ViewdrinkComponent } from './viewdrink/viewdrink.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DescrizioneComponent,
    BachecaComponent,
    FooterComponent,
    DrinkboxComponent,
    ViewdrinkComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CarService } from './shared/car/car.service';
import { CarListComponent } from './car-list/car-list.component';
import { MutiSelectComponent } from './muti-select/muti-select.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    MutiSelectComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }

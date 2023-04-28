import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCardsComponent } from './lib/service-cards/service-cards.component';
import { DestinationCardsComponent } from './lib/destination-cards/destination-cards.component';



@NgModule({
  declarations: [
    ServiceCardsComponent,
    DestinationCardsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ServiceCardsComponent,
    DestinationCardsComponent
  ]
})
export class SharedModule { }

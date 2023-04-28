import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ServicesComponent } from './components/service-page/services.component';
import { DestinationComponent } from './components/destination/destination.component';
import { FooterComponent } from './components/footer/footer.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { SharedModule } from './shared/shared.module';
import { MarqueeComponent } from './components/marquee/marquee.component';
import { StepsComponent } from './components/steps/steps.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServicesComponent,
    DestinationComponent,
    FooterComponent,
    SubscribeComponent,
    MarqueeComponent,
    StepsComponent,
    
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

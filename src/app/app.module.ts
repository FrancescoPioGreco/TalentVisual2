import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SafeLinkDirective } from './safe-link.directive';
import { HomeComponent } from './home/home.component';
import { PlayerComponent } from './player/player.component';
import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';
import { PlayerApiRestComponent } from './player-api-rest/player-api-rest.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SafeLinkDirective,
    HomeComponent,
    PlayerComponent,
    CardComponent,
    FooterComponent,
    PlayerApiRestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule} from "@angular/material/list"

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { GameDetailPageComponent } from './components/game-detail-page/game-detail-page.component';
import { GameListPageComponent } from './components/game-list-page/game-list-page.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GameDetailPageComponent,
    GameListPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

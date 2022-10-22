import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardAreaComponent } from './components/card-area/card-area.component';
import { CardComponent } from './components/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './routing-modules/app-routing.module';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { DialogModule } from '@angular/cdk/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardAreaComponent,
    CardComponent,
    MainMenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatDialogModule,
    DialogModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

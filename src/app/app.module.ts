import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WomenComponent } from './women/women.component';
import { MenComponent } from './men/men.component';

@NgModule({
  declarations: [
    AppComponent,
    WomenComponent,
    MenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

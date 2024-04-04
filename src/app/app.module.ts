import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IphonesComponent } from './iphones/iphones.component';
import { CirclesComponent } from './circles/circles.component';

@NgModule({
  declarations: [
    AppComponent,
    IphonesComponent,
    CirclesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

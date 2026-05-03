import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PantallaComponent } from './componentes/pantalla/pantalla.component';
import { BotonesComponent } from './componentes/botones/botones.component';

@NgModule({
  declarations: [
    AppComponent,
    PantallaComponent,
    BotonesComponent
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

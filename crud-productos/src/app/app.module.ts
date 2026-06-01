import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { ProductPageComponent } from './features/products/pages/product-page/product-page.component';
import { ProductFormComponent } from './features/products/components/product-form/product-form.component';
import { ProductCardComponent } from './features/products/components/product-card/product-card.component';
import { ProductListComponent } from './features/products/components/product-list/product-list.component';

@NgModule({
  declarations: [
  AppComponent,
  ProductPageComponent,
  ProductFormComponent,
  ProductListComponent,
  ProductCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component'
import { PostModule } from './features/post/post.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    PostModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

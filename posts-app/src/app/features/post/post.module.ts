import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { PostListComponent } from './pages/post-list/post-list.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    PostListComponent,
    PostCardComponent
  ],
  imports: [
    CommonModule, 
    SharedModule
  ],
  exports: [
    PostListComponent 
  ]
})
export class PostModule { }
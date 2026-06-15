import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'] 
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];
  isLoading: boolean = true;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe({
      next: (data) => {
        this.posts = data;
        this.isLoading = false; 
      },
      error: (err) => {
        console.error('Error al recuperar posts:', err);
        this.isLoading = false; 
      }
    });
  }
}
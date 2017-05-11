import { Component } from '@angular/core';
import { MessageService } from './message.service';
import { PostsService } from './posts.service';

@Component({
  providers: [MessageService, PostsService],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private service: MessageService, private postsService: PostsService) { }
  message: string;
  title = 'app works!';
  posts: any = [];
  
  ngOnInit() {
    this.message = this.service.getMessage();
    // Retrieve posts from the API
    this.postsService.getAllPosts().subscribe(posts => {
      this.posts = posts;
    });
  }
}

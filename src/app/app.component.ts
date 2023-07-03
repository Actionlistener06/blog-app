import { Component } from '@angular/core';
import { PostService } from './services/post.service';
import { PostModel } from './models/post-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private postService: PostService) { }
  title = 'myblog';
  postData: Array<PostModel> = [];
  ngOnInit(): void {
    this.postService.getPosts().subscribe((data: any) => { this.postData = data; });
  }

}

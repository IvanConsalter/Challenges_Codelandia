import { Component, OnInit } from '@angular/core';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { BlogService } from './blog.service';
import { Post } from './post.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  faHeart = faHeart;
  faSearch = faSearch;

  arrayPost: Array<Post> = [];
  arrayPostOriginal: Array<Post> = [];

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogService.getPosts().subscribe((res: Array<Post>) => {
      this.arrayPostOriginal = res;
      this.arrayPost = this.arrayPostOriginal;
    });
  }

  searchPost(value) {
    console.log(value);
    if (!value) {
      this.arrayPost = this.arrayPostOriginal;
    }
    this.arrayPost = this.arrayPost.filter((post) =>
      post.title.toLowerCase().includes(value.toLowerCase())
    );
  }
}

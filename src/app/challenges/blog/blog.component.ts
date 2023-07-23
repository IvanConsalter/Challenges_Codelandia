import { Component, OnInit } from '@angular/core';
import { BlogService } from './blog.service';
import { Post } from './post.model';
import {
  animate,
  style,
  transition,
  trigger,
  keyframes,
} from '@angular/animations';

const slideInOutStyles = [
  { transform: 'translateX(-100%)', offset: 0 },
  { transform: 'translateX(0%)', offset: 1 },
];

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateY(100%)' }),
        animate('800ms linear', style({ transform: 'translateY(0%)' }))
      ]),
      transition(':leave', [
        animate('800ms linear', style({ transform: 'translateY(100%)' }))
      ])
    ])
  ],
})
export class BlogComponent implements OnInit {
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

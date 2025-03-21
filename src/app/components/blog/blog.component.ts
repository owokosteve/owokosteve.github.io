import { AfterViewInit, Component } from '@angular/core';
import { BLOGS, Blog } from '../../data/blog-data';
import { SlicePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [SlicePipe, RouterLink],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  
  blogs: Blog[] = BLOGS;
  visibleBlogs: Blog[] = [];

}

import { Component, OnInit } from '@angular/core';
import { Blog, BLOGS } from '../../../data/blog-data';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-blog-details',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.scss'
})
export class BlogDetailsComponent implements OnInit {
  blog: Blog | undefined;

  constructor(private route: ActivatedRoute) {}
    
  ngOnInit() {
    const blogId = +this.route.snapshot.paramMap.get('id')!;
    this.blog = BLOGS.find(b => b.id === blogId);
    }
}

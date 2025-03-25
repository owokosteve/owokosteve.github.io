import { Component, OnInit } from '@angular/core';
import { BLOGS, Blog } from '../../../../../public/data/blog-data';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { MarkdownComponent } from 'ngx-markdown';

@Component({
  selector: 'app-blog-details',
  standalone: true,
  imports: [CommonModule, DatePipe, MarkdownComponent],
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.scss'
})
export class BlogDetailsComponent implements OnInit {
  blog: Blog | undefined;
  markdownSrc: string = '';
  loading = true;
  loadError = false;

  constructor(private route: ActivatedRoute) {}
  
  onMarkdownLoad() {
    console.log('Markdown loaded successfully');
    this.loading = false;
  }

  onMarkdownError() {
    console.log("Markdown failed to load!");
    this.loading = false;
    this.loadError = true;
  }

  ngOnInit() {
    const blogId = Number(this.route.snapshot.paramMap.get('id'));
    this.blog = BLOGS.find(b => b.id === blogId);

    if (this.blog) {
      this.markdownSrc = `/data/blogs/${this.blog.md_content_file}`;
    }
    }
}

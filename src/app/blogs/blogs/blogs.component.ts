import { Component } from '@angular/core';
import { MaterialModule } from './../../material/material.module';
import { BlogCardComponent } from '../blog-card/blog-card.component';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [MaterialModule, BlogCardComponent],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss'
})
export class BlogsComponent {

}

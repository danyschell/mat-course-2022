import { Component } from '@angular/core';
import { MaterialModule } from './../../material/material.module';

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.scss'
})
export class BlogCardComponent {

}

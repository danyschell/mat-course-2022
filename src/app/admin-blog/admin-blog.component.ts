import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../shared/delete-dialog/delete-dialog.component';

export interface PeriodicElement {
  id: number;
  title: string;
  body: string;
  image: string;
  published_at: Date;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: 1,
    title: 'My Best Blog',
    body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus unde nam ut doloremque laboriosam optio neque dicta itaque architecto dolorem porro ad, beatae fugit cumque nulla quisquam omnis placeat. Ullam.',
    image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    published_at: new Date(),
  },
  {
    id: 2,
    title: 'My Best Blog',
    body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus unde nam ut doloremque laboriosam optio neque dicta itaque architecto dolorem porro ad, beatae fugit cumque nulla quisquam omnis placeat. Ullam.',
    image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    published_at: new Date(),
  },
  {
    id: 3,
    title: 'My Best Blog',
    body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus unde nam ut doloremque laboriosam optio neque dicta itaque architecto dolorem porro ad, beatae fugit cumque nulla quisquam omnis placeat. Ullam.',
    image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    published_at: new Date(),
  },
  {
    id: 4,
    title: 'My Best Blog',
    body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus unde nam ut doloremque laboriosam optio neque dicta itaque architecto dolorem porro ad, beatae fugit cumque nulla quisquam omnis placeat. Ullam.',
    image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    published_at: new Date(),
  },
  {
    id: 5,
    title: 'My Best Blog',
    body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus unde nam ut doloremque laboriosam optio neque dicta itaque architecto dolorem porro ad, beatae fugit cumque nulla quisquam omnis placeat. Ullam.',
    image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    published_at: new Date(),
  },
];

@Component({
  selector: 'app-admin-blog',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './admin-blog.component.html',
  styleUrl: './admin-blog.component.scss',
  host: {
    ngSkipHydration: '',
  },
})
export class AdminBlogComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'title',
    'image',
    'published_at',
    'actions',
  ];

  dataSource: PeriodicElement[] = [
    {
      id: 1,
      title: 'My Best Blog',
      body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus unde nam ut doloremque laboriosam optio neque dicta itaque architecto dolorem porro ad, beatae fugit cumque nulla quisquam omnis placeat. Ullam.',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      published_at: new Date(),
    },
    {
      id: 2,
      title: 'My Best Blog',
      body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus unde nam ut doloremque laboriosam optio neque dicta itaque architecto dolorem porro ad, beatae fugit cumque nulla quisquam omnis placeat. Ullam.',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      published_at: new Date(),
    },
    {
      id: 3,
      title: 'My Best Blog',
      body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus unde nam ut doloremque laboriosam optio neque dicta itaque architecto dolorem porro ad, beatae fugit cumque nulla quisquam omnis placeat. Ullam.',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      published_at: new Date(),
    },
    {
      id: 4,
      title: 'My Best Blog',
      body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus unde nam ut doloremque laboriosam optio neque dicta itaque architecto dolorem porro ad, beatae fugit cumque nulla quisquam omnis placeat. Ullam.',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      published_at: new Date(),
    },
    {
      id: 5,
      title: 'My Best Blog',
      body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus unde nam ut doloremque laboriosam optio neque dicta itaque architecto dolorem porro ad, beatae fugit cumque nulla quisquam omnis placeat. Ullam.',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      published_at: new Date(),
    },
  ];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  delete(id: number) {
    const dialogRef = this.dialog.open(DeleteDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      //alert(result);
      if (result === 'true') {
        //alert('blog was deleted');
        this.dataSource = this.dataSource.filter((data) => data.id != id);
      }
    });
  }
}

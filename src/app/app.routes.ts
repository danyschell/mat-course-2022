import { Routes } from '@angular/router';


import { LoginComponent } from './auth/login/login.component';
import { BlogsComponent } from './blogs/blogs/blogs.component';
import { BlogDetailsComponent } from './blogs/blog-details/blog-details.component';

export const routes: Routes = [
    // { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: "login", component: LoginComponent },
    { path: "blogs", component: BlogsComponent },
    { path: "blogDetails", component: BlogDetailsComponent },
    // { path: '**', redirectTo: '/login', pathMatch: 'full' },
];

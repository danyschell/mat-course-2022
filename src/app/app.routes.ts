import { Routes } from '@angular/router';


import { LoginComponent } from './auth/login/login.component';
import { BlogPageComponent } from './blogs/blog-page/blog-page.component';

export const routes: Routes = [
    // { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: "login", component: LoginComponent },
    { path: "blogPage", component: BlogPageComponent },
    // { path: '**', redirectTo: '/login', pathMatch: 'full' },
];

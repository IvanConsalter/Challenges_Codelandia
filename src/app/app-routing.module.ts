import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './challenges/blog/blog.component';
import { JordanShoesComponent } from './challenges/jordan-shoes/jordan-shoes.component';
import { OnePageComponent } from './challenges/one-page/one-page.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'jordan-shoes',
    component: JordanShoesComponent
  },
  {
    path: 'one-page',
    component: OnePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

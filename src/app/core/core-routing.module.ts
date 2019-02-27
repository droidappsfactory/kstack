import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellComponent } from './ui-components/shell/shell.component';
import { HomeComponent } from '../pages/home/home.component';
import { DetailComponent } from '../pages/detail/detail.component';
import { ProfileComponent } from '../pages/profile/profile.component';
import { PagenotfoundComponent } from '../pages/pagenotfound/pagenotfound.component';
import { PostComponent } from '../pages/post/post.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: '' , redirectTo: 'home', pathMatch: 'full'},
      { path: 'detail', component: DetailComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'post', component: PostComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }

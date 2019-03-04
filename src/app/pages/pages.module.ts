import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PostComponent } from './post/post.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent, HomeComponent, DetailComponent, ProfileComponent, PagenotfoundComponent, PostComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [LoginComponent, DetailComponent, ProfileComponent, PagenotfoundComponent]
})
export class PagesModule { }

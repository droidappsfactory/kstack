import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: '', loadChildren: './core/core.module#CoreModule' },
  { path: 'contributions', loadChildren: './contributions/contributions.module#ContributionsModule' },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

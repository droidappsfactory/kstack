import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContributionsRoutingModule } from './contributions-routing.module';
import { ShellComponent } from './ui-shell/shell/shell.component';
import { HomeComponent } from './ui-shell/home/home.component';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [ShellComponent, HomeComponent],
  imports: [
    CommonModule,
    ContributionsRoutingModule,
    StoreModule.forFeature('contributions', {})
  ]
})
export class ContributionsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContributionsRoutingModule } from './contributions-routing.module';
import { ShellComponent } from './ui-shell/shell/shell.component';
import { HomeComponent } from './ui-shell/home/home.component';

@NgModule({
  declarations: [ShellComponent, HomeComponent],
  imports: [
    CommonModule,
    ContributionsRoutingModule
  ]
})
export class ContributionsModule { }

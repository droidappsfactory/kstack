import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './ui-components/shell/shell.component';
import { HeaderComponent } from './ui-components/header/header.component';
import { CoreRoutingModule } from './core-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PagesModule } from '../pages/pages.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [ShellComponent, HeaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    CoreRoutingModule,
    SharedModule,
    PagesModule
  ]
})
export class CoreModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AppBarModule,
  ButtonModule,
  GaugeModule,
  SettingsModule,
  SwitchModule,
  SystemBarModule,
  TreeModule,
  ThemeService,
  TileModule,
  DropdownModule,
  ProgressBarModule,
  TableModule,
  AccordionModule,
  InputModule
} from '@eds/angular';
import { PostItemComponent } from './ui-components/post-item/post-item.component';


@NgModule({
  declarations: [ PostItemComponent],
  imports: [
    CommonModule,
    AccordionModule,
    AppBarModule,
    ButtonModule,
    DropdownModule,
    GaugeModule,
    ProgressBarModule,
    SettingsModule,
    SwitchModule,
    SystemBarModule,
    TableModule,
    TileModule,
    TreeModule
  ],
  providers: [ThemeService],
  exports: [
    AccordionModule,
    AppBarModule,
    ButtonModule,
    DropdownModule,
    GaugeModule,
    ProgressBarModule,
    SettingsModule,
    SwitchModule,
    SystemBarModule,
    TableModule,
    TileModule,
    TreeModule,
    InputModule,
    PostItemComponent]
})
export class SharedModule { }

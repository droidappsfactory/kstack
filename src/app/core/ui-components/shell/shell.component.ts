import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ThemeService } from '@eds/angular';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class ShellComponent {

  menuOpened = false;
  settingsOpened = false;
  isLightTheme = false;

  constructor(private themeService: ThemeService) {}

  toggleTheme(isLight: boolean) {
    this.themeService.toggle(isLight);

    // Temporary event to switch the map theme
    const switchTheme = new CustomEvent('switchTheme', { detail: { theme: document.body.classList } });
    document.dispatchEvent(switchTheme);
  }

  menuHandler() {
    this.menuOpened = !this.menuOpened;
  }

  settingsHandler() {
    this.settingsOpened = !this.settingsOpened;
  }

}

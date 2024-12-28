import { Component, signal } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet],
  styleUrl: './app.component.scss',
  template: `
    <app-header [title]="'Vai Corinthians'" />
    <div class="page-content">
      <router-outlet />
    </div>
  `,
})
export class AppComponent {}

import { Component } from '@angular/core';
import { PRIMENG_MODULES } from './primeng-imports';

@Component({
  selector: 'app-root',
  imports: [...PRIMENG_MODULES],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}

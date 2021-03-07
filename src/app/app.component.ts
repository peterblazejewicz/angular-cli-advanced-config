import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = `STABLE_FEATURE: ${STABLE_FEATURE} EXPERIMENTAL_FEATURE: ${EXPERIMENTAL_FEATURE}`;
}

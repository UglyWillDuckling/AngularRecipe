import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes';

@Component({
  selector: 'rb-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Recipe Book works!';
}

import { Component } from '@angular/core';

import { Hello }    from './hello';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'

})
export class AppComponent {

  powers = ['Primary', 'High School',
            'Bachelors Degree', 'Masters Degree','PHD Degree'];

  model = new Hello(18, 'Edwin', this.powers[0], 'Kihara');

  submitted = false;

  onSubmit() { this.submitted = true; }

  newHero() {
    this.model = new Hello(42, '', '');
  }
}
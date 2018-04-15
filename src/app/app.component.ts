import { Component } from '@angular/core';

import { Studant } from './studant/studant.model'

@Component({
  selector: 'jad-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  // Propriedade no plaral para representar todos esses estudantes, que é um array de estudantes
  studants: Studant[] = [
    {name: 'Luke', isJedi: true, temple: 'Coruscant'},
    {name: 'Leia', isJedi: false},
    {name: 'Han', isJedi: false}
  ]
}

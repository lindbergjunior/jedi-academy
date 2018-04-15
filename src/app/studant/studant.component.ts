import { Component, OnInit, Input } from '@angular/core';
import {Studant} from './studant.model';

@Component({
  selector: 'jad-studant',
  templateUrl: './studant.component.html',
  styleUrls: ['./studant.component.css']
})
export class StudantComponent implements OnInit {

  // Input recebe valores
  @Input() studant: Studant

  constructor() { }

  ngOnInit() {
  }

  clicked(){
    console.log(`Studant: ${this.studant.name}`)
  }
}

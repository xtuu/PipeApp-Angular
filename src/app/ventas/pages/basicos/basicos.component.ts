import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',

})
export class BasicosComponent {

  nombreLower: string = 'adrian';
  nombreUpper: string = 'ADRIAN'
  nombreCompleto: string = 'aDrIan FErNanDEZ'


  fecha: Date = new Date()

}

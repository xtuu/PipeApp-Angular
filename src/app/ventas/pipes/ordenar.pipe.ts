import { Pipe, PipeTransform } from '@angular/core';
import { Nakama } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(nakamas: Nakama[], orderPor: string = 'sin valor'): Nakama[] {


    switch (orderPor) {
      case 'nombre':
        return nakamas.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1);

      case 'AkumaNoMi':
        return nakamas.sort((a, b) => (a.AkumaNoMi > b.AkumaNoMi) ? -1 : 1);

      case 'color':
        return nakamas.sort((a, b) => (a.color > b.color) ? 1 : -1);

      default:
        return nakamas;
    }


  }
}
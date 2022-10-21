import { Component } from '@angular/core';
import { Color, Nakama } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',

})
export class OrdenarComponent {

  enMayuscula: boolean = false;

  ordenarPor: string = '';

  nakamas: Nakama[] = [
    {
      nombre: 'Luffy',
      AkumaNoMi: true,
      color: Color.rojo
    },
    {
      nombre: 'Zoro',
      AkumaNoMi: false,
      color: Color.verde
    },
    {
      nombre: 'Sanji',
      AkumaNoMi: false,
      color: Color.negro
    },
    {
      nombre: 'Jinbe',
      AkumaNoMi: false,
      color: Color.azul
    },
    {
      nombre: 'Robin',
      AkumaNoMi: true,
      color: Color.morado
    },
  ]

  cambiarMayuscula() {
    this.enMayuscula = !this.enMayuscula
  }



  cambiarOrden(valor: string) {
    this.ordenarPor = valor
    console.log(valor)
  }
}

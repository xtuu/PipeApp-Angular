import { Component } from '@angular/core';
import { interval } from 'rxjs'

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',

})
export class NoComunesComponent {

  //i18nSelect

  nombre2: string = 'Luisangelly';
  genero2: string = 'femenino';

  nombre: string = 'Adrian';
  genero: string = 'masculino';

  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }


  //i18nPlural

  clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Mario']
  clientesMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos dos clientes esperando.',
    'other': 'tenemos # clientes esperando'
  }




  cambiarCliente() {
    this.nombre = this.nombre2
    this.genero = this.genero2
  }

  borrarCliente() {
    this.clientes.pop()
  }


  //KeyValue Pipe
  persona = {
    nombre: 'Adrian',
    Edad: 28,
    direccion: 'La Guaira, Venezuela'
  }

  //JsonPipe
  heroes = [
    {
      nombre: 'Luffy',
      AkumaNoMi: true,
    },
    {
      nombre: 'Zoro',
      AkumaNoMi: false,
    },
    {
      nombre: 'Sanji',
      AkumaNoMi: false,
    },
  ]


  //Async Pipe

  miObservable = interval(2000) // 0,1,2,3,4,5,6,7,8,9,10 ... 

  valorPromesa = new Promise((resolve, reject) => {

    setTimeout(() => {
      resolve('Tenemos data de promesa')
    }, 3500);

  });


}

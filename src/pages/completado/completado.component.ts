import { Component } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Lista } from '../../models/lista.model';



@Component({
  selector: 'page-completado',
  templateUrl: 'completado.component.html'
})
export class CompletadoPage {

  constructor(public deseoService:DeseosService) {

  }
  listaSeleccionada(lista:Lista){

    console.log('lista :', lista);

  }

}
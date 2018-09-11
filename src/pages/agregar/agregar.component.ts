import { Component } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Lista,ListaItem } from '../../models';
import { NavParams } from 'ionic-angular';
import { ListaItem } from '../../models/lista-item.model';





@Component({
  selector: 'page-agregar',
  templateUrl: 'agregar.component.html'
})
export class AgregarPage {

  lista:Lista;
  nombreItem : string = '';

  constructor( public deseosService:DeseosService,
                private navParams:NavParams) {
                  // console.log('this.navParams :', this.navParams);
         const titulo =this.navParams.get('titulo'); 
          this.lista = new Lista(titulo);
          console.log('this.lista :', this.lista);
  }
 agregarItem(){

  if(this.nombreItem.length === 0){
    return;
  }

  const nuevoItem = new ListaItem(this.nombreItem);

  this.lista.items.push(nuevoItem);
  console.log('this.lista.item :', this.lista);
  this.nombreItem ='';

 }
 actualizarTarea(item:ListaItem){
   item.completado = !item.completado

   

 }
 borrarItem(idx: number){
  this.lista.items.splice(idx,1);
 }
}
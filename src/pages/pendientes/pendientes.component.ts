import { Component } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Lista } from '../../models';
import { NavController } from 'ionic-angular';
import { AgregarPage } from '../agregar/agregar.component';

import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-pendientes',
  templateUrl: 'pendientes.component.html'
})
export class PendientesPage {


  constructor(public deseosService:DeseosService,
              private navCtrl:NavController,
              private alertCtrl: AlertController) {

  }


  listaSeleccionada(lista: Lista){
      console.log( lista);

  }


  agregarLista(){
    const alerta = this.alertCtrl.create({

      title: 'Nueva lista',
      // message: "Nombre de la nueva lista",
      inputs: [
        {
          name: 'titulo',
          placeholder: 'nombre de la lista'
        },
      ],
      buttons: [{
          text: 'Cancelar'
        },{
          text: 'Guardar',
          handler: data => {
            if (data.titulo.length === 0){
                    return;
            }
            this.navCtrl.push(AgregarPage,{
              titulo : data.titulo
            });

              
            
          }
        }
      ]
    });

    alerta.present();





   
   

  }
}



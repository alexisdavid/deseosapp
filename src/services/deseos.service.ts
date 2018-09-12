import { Injectable } from '@angular/core';
import { Lista } from '../models';


@Injectable()

export class DeseosService{

    listas: Lista[] = [];
    
    constructor(){
        console.log('deseos service inicializado');



        // const lista1 = new Lista('recolectar piedras del infinito');
        // const lista2 = new Lista('heroes a vencer');

        // this.listas.push(lista1,lista2)
        // console.log('listas :',this.listas );
        this.cargarStorage()
           
        
    }

    agregarLista(lista:Lista){
        this.listas.push(lista);
        this.guardarStorage();
    }




    guardarStorage(){
    localStorage.setItem('data',JSON.stringify(this.listas));


    }

    cargarStorage(){
        if (localStorage.getItem('data')){
            this.listas = JSON.parse(localStorage.getItem('data'))
        }else{
            this.listas = [];
        }


    }
}
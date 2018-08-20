import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ProductosService } from "../../providers/productos";
import { ProductoPage } from "../index.paginas";


@IonicPage()
@Component({
  selector: 'page-busqueda',
  templateUrl: 'busqueda.html',
})
export class Busqueda {
  public termino;
  productoPage = ProductoPage;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _ps:ProductosService) {
  }


  buscar_productos(ev: any){
    //console.log(this.termino);
    this._ps.buscar_producto(this.termino);
    
  }



}

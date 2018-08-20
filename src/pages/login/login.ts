import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

import { UsuarioService } from "../../providers/usuario";
import { CarritoService } from '../../providers/carrito';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  correo:string = "";
  contrasena:string = "";


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private viewCtrl: ViewController,
              private _us:UsuarioService,
              private _cs:CarritoService ) {

  }

  ingresar(){
    //console.log(this.correo);
   if( this._us.token ){
    this._cs.ver_carrito();
   } 
   else{
    this._us.ingresar(this.correo, this.contrasena);
   }  
   
  }

}

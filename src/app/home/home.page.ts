import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { JsonService } from '../json.service';
import { Router } from '@angular/router';
import { Platform, NavController,LoadingController, AlertController } from '@ionic/angular';
import { environment } from '../../environments/environment';
import { MenuController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common'
import { Location } from "@angular/common";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  permisos: any;
  rol: any;
  userinfo: any;
  nombre_rol: [];
  rol_descripcion: any;

  constructor(
    private location: Location,
    private router: Router,
    private json: JsonService,
    public loadingController: LoadingController,
    public navCtrl: NavController,
    public loading: LoadingController,
    private route: ActivatedRoute,
    public modalCtrl: ModalController,
    public datepipe: DatePipe,
    public menuCtrl: MenuController
  )
  
   {

    this.route.params.subscribe(params => {
      this.userinfo = params; 
      console.log('userinfo route params this.userinfo=', this.userinfo);
     var data = {
       id_rol: this.userinfo.id_rol
     }
    this.json.rol(data).subscribe((res: any ) =>{
      console.log('respuesta de rol permisos: json.rol ',res);
      this.rol = res['detalles'];
      this.nombre_rol=res['detalles'].nombre_rol;
      this.rol_descripcion=res['detalles'].rol_descripcion;
      this.permisos = res['suspermisos'];
    }); //cierra la consulta delos permisos

}); //cerrando la consulta de navegacion entre parametros.
   }

   ionViewWillEnter() {
     if(!this.userinfo.id_rol){
       console.log('el usuario tiene un rol')
      this.menuCtrl.enable(false);
    }
      else{
        this.menuCtrl.enable(true);

      }
   }

  ngOnInit() {

    // como entrando hace una consulta
    // 1) si no hay login en el storage que mande al login
    // 2) si hay login en el storage que reconsulte ese login
    // y lo intente autenticar nuevamente
    // si vuelve a logear y esta activo que lo mantenga aqui
    // si no que lo lleve al login

  }

  salir(){
    localStorage.clear();  //limpiando cache
    this.userinfo=null;
    this.router.navigate(['/login']);
  }

}

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

  constructor(
    private location: Location,
    private router: Router,
    private json: JsonService,
    public loadingController: LoadingController,
    public navCtrl: NavController,
    public loading: LoadingController,
    private route: ActivatedRoute,
    public modalCtrl: ModalController,
    public datepipe: DatePipe
  )
  
   {
     var data = {
       id_rol: '5'
     }
    this.json.rol(data).subscribe((res: any ) =>{
      console.log('respuesta de rol permisos: json.rol ',res);
      this.rol = res['detalles'];
      this.permisos = res['suspermisos'];
    });


   }

  ngOnInit() {

    // como entrando hace una consulta
    // 1) si no hay login en el storage que mande al login
    // 2) si hay login en el storage que reconsulte ese login
    // y lo intente autenticar nuevamente
    // si vuelve a logear y esta activo que lo mantenga aqui
    // si no que lo lleve al login

  }

}

import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common'
import { JsonService } from './../json.service';
import { Router } from "@angular/router";
import { NavController,LoadingController, AlertController } from '@ionic/angular';
import { Location } from "@angular/common";
import { ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ModalqrPage } from '../modalqr/modalqr.page';

@Component({
  selector: 'app-ingreso-material-detalles',
  templateUrl: './ingreso-material-detalles.page.html',
  styleUrls: ['./ingreso-material-detalles.page.scss'],
})
export class IngresoMaterialDetallesPage implements OnInit {
  productoquellega: any;
  carreteorrollo: any;
  numerodenotadeentrada: any;
  metrosencarrete: any;

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
    public modalController: ModalController,

  ) 
  { 
    this.route.params.subscribe(params => {
      this.productoquellega=params;
      if(this.productoquellega.descripcion!=null&&this.productoquellega.descripcion!=undefined){
        //llego un producto
        console.log('this.productoquellega',this.productoquellega);
      }
      else{
        this.router.navigate(['/ingreso-material']);
      }

    });
  }

  ngOnInit() {
  }

  ONCHANGEcarreteorrollo(event){console.log('Change Event',event.target.value);
    this.carreteorrollo=event.target.value;
  }
  ONCHANGEnumerodenotadeentrada(event){console.log('Change Event',event.target.value);
  this.numerodenotadeentrada=event.target.value;
  }
  ONCHANGEnetrosencarrete(event){console.log('Change Event',event.target.value);
  this.metrosencarrete=event.target.value;
  }


  
  async modalimprimirqr(){
    var datacarnetyqr = {
      tipo_de_qr:'ingreso-material',
      referencia:this.productoquellega.referencia,
      producto:this.productoquellega.producto,
      descripcion:this.productoquellega.descripcion,
      carreteorrollo:this.carreteorrollo,
      numerodenotadeentrada:this.numerodenotadeentrada,
      metrosencarrete:this.metrosencarrete
    }
    const modal = await this.modalController.create({
      component: ModalqrPage,
      componentProps: {
        cssClass: 'my-custom-class',
        'dataparaelmodal': datacarnetyqr,
      }
    });
    console.log('enviando estos datos al modal qr',datacarnetyqr);
    return await modal.present();
  
    
  }

  volver(){
    this.location.back();
  }
}

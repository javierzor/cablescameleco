import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common'
import { JsonService } from './../json.service';
import { Router } from "@angular/router";
import { NavController,LoadingController, AlertController } from '@ionic/angular';
import { Location } from "@angular/common";
import { ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ModalqrPage } from '../modalqr/modalqr.page';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { GlobalpermisosService } from '../globalpermisos.service';

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
  //inician las variables del qr generador/scanner
  qrData = null;
  createdCode = null;
  scannedCode = null;
  fecha_autogenerada: Date;
  user_nombre: any;
  user_id: any;
  usuariologeado: any;
  seccionactiva: string;
  desactivarboton: string;
  //finalizan las variables del qr generador/scanner


  constructor(
    private barcodeScanner: BarcodeScanner,
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
    public globalpermisos: GlobalpermisosService,
    

  ) 
  { 
    this.desactivarboton='si'
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

  ionViewDidEnter(){
    this.usuariologeado=this.globalpermisos.usuariologeado;
    if(this.usuariologeado==undefined||this.usuariologeado==null){
      this.seccionactiva='no';
    }

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


  
  async guardardataymodalimprimirqr(){
//RECOLECCION DE DATOS NECESARIOS.
this.fecha_autogenerada = new Date ();
 let fecha_autogenerada_arreglada =this.datepipe.transform(this.fecha_autogenerada, 'yyyy-MM-dd');
this.user_nombre=this.globalpermisos.nombre;
this.user_id=this.globalpermisos.id_usuario;

//PREPARACION DE VARIABLE QUE VIAJARA.
var guardarcaretedb = {
  nombre_solicitud:'guardar_ingreso_material',
  tipo_de_qr:'ingreso-material',
  referencia:this.productoquellega.referencia,
  producto:this.productoquellega.producto,
  descripcion:this.productoquellega.descripcion,
  carreteorrollo:this.carreteorrollo,
  numerodenotadeentrada:this.numerodenotadeentrada,
  metrosencarrete:this.metrosencarrete,
  fecha_autogenerada:fecha_autogenerada_arreglada,
  nombre_user:this.user_nombre,
  id_user:this.user_id,
  createdCode:'sinqr'
}


if(this.user_id&&this.carreteorrollo&&this.numerodenotadeentrada&&this.metrosencarrete&&this.carreteorrollo!=''&&this.numerodenotadeentrada!=''&&this.metrosencarrete!=''&&this.user_id!=null&&this.user_id!=undefined)
{

  this.json.variasfunciones(guardarcaretedb).subscribe(async (res: any ) =>{
    console.log('res guardar_ingreso_material', res)

    if(res.id>0){

      if(res.id<10){
        guardarcaretedb.createdCode = '0000000'+res.id;
      }
      if(res.id>10&&res.id<100){
        guardarcaretedb.createdCode = '000000'+res.id;
      }
      if(res.id>100&&res.id<1000){
        guardarcaretedb.createdCode = '00000'+res.id;
      }
      if(res.id>1000&&res.id<10000){
        guardarcaretedb.createdCode = '0000'+res.id;
      }
      if(res.id>10000&&res.id<100000){
        guardarcaretedb.createdCode = '000'+res.id;
      }

      const modal = await this.modalController.create({
        component: ModalqrPage,
        componentProps: {
          cssClass: 'my-custom-class',
          'dataparaelmodal': guardarcaretedb,
        }
      });
      console.log('enviando estos datos al modal qr',guardarcaretedb);
      return await modal.present();

    }
  


  }); //cierre de la suscripcion del servicio JSON.
} //finaliza el if que verifica que se guarde solo si reyeno los campos obligatorios. (si parte el boton)

  
    
  }

  reingresar(){
    this.router.navigate(['/login']);

  }

  activarboton(){
  if(this.carreteorrollo&&this.numerodenotadeentrada&&this.metrosencarrete&&this.carreteorrollo!=''&&this.numerodenotadeentrada!=''&&this.metrosencarrete!=''){
    this.desactivarboton='no';
  }
  else{
    this.desactivarboton='si';
  }
  
    
  }

  volver(){
    this.location.back();
  }

  
  // scan(){
  //   this.barcodeScanner.scan().then(barcodeData => {
  //     console.log('Barcode data', barcodeData);
  //     alert("encode success: " + barcodeData);

  //    }).catch(err => {
  //        console.log('Error', err);
  //    });
  // }


//empiezan los generador y scaner standar
  createCode () {
    this.createdCode = this.qrData;
    console.log(this.createdCode);
  }

  scanCode () {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
    })
  }
//terminan los generador y scaner estandar


}

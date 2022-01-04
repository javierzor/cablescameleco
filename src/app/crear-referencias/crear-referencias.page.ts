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
import { AppComponent } from '../app.component';
import { GlobalpermisosService } from '../globalpermisos.service';
import { File } from '@ionic-native/file/ngx';
import * as XLSX from 'xlsx';
type AOA = any[][];

@Component({
  selector: 'app-crear-referencias',
  templateUrl: './crear-referencias.page.html',
  styleUrls: ['./crear-referencias.page.scss'],
})
export class CrearReferenciasPage implements OnInit {
  permisosconsultadosencomponenteprincipalYService: any;
  puedenavegaraqui:any;
  seccionactiva: string;
  usuariologeado: any;
  step: any;
  data: any[][] = [[1,2,3],[4,5,6]];

  constructor(
    private file: File,
    private location: Location,
    private router: Router,
    private json: JsonService,
    public loadingController: LoadingController,
    public navCtrl: NavController,
    public loading: LoadingController,
    private route: ActivatedRoute,
    public modalCtrl: ModalController,
    public datepipe: DatePipe,
    public menuCtrl: MenuController,
    public myapp: AppComponent,
    public globalpermisos: GlobalpermisosService,
  )

{      
  this.step='1';

}


ionViewDidEnter(){
  this.usuariologeado=this.globalpermisos.usuariologeado;
  if(this.usuariologeado==undefined||this.usuariologeado==null){
    this.seccionactiva='no';
  }
  this.globalpermisos.mispermisosglobalesenservice;
  console.log('en la vista lo que tengo',this.permisosconsultadosencomponenteprincipalYService);
  if(this.globalpermisos.mispermisosglobalesenservice){
  if(this.globalpermisos.mispermisosglobalesenservice['permisonumero10']=='si')
  {
    this.puedenavegaraqui='si';
    console.log('this.puedenavegaraqui:',this.puedenavegaraqui);
  }
  else if(this.globalpermisos.mispermisosglobalesenservice['permisonumero10']!='si'){
    this.puedenavegaraqui='no';
    console.log('this.puedenavegaraqui:',this.puedenavegaraqui);
  }
}
}

reingresar(){
  this.router.navigate(['/login']);
  //vaciando variables usadas en esta vista
  this.seccionactiva='';
  this.puedenavegaraqui='';
}


 async ngOnInit() {
}


read(ab: ArrayBuffer) {
  /* read workbook */
  const wb: XLSX.WorkBook = XLSX.read(new Uint8Array(ab), {type: 'array'});

  /* grab first sheet */
  const wsname: string = wb.SheetNames[0];
  const ws: XLSX.WorkSheet = wb.Sheets[wsname];

  /* save data */
  this.data = (XLSX.utils.sheet_to_json(ws, {header: 1}) as AOA);
};

write(): XLSX.WorkBook {
  /* generate worksheet */
  const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(this.data);

  /* generate workbook and add the worksheet */
  const wb: XLSX.WorkBook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'SheetJS');

  return wb;
};

/* File Input element for browser */
onFileChange(evt: any) {

  // se cambiara el paso de la vista
  this.step='2';

  /* wire up file reader */
  const target: DataTransfer = (evt.target as DataTransfer);
  if (target.files.length !== 1) { throw new Error('Cannot use multiple files'); }
  const reader: FileReader = new FileReader();
  reader.onload = (e: any) => {
    const ab: ArrayBuffer = e.target.result;
    this.read(ab);
  };
  reader.readAsArrayBuffer(target.files[0]);
};

/* Import button for mobile */
async import() {
  try {
    const target: string = this.file.documentsDirectory || this.file.externalDataDirectory || this.file.dataDirectory || '';
    const dentry = await this.file.resolveDirectoryUrl(target);
    const url: string = dentry.nativeURL || '';
    alert(`Attempting to read SheetJSIonic.xlsx from ${url}`);
    const ab: ArrayBuffer = await this.file.readAsArrayBuffer(url, 'SheetJSIonic.xlsx');
    this.read(ab);
  } catch(e) {
    const m: string = e.message;
    alert(m.match(/It was determined/) ? 'Use File Input control' : `Error: ${m}`);
  }
};

  async guardar(){
  const actualizando = await this.loadingController.create({
    message: 'Guardando...',spinner: 'bubbles',duration: 5000,
    });
    actualizando.present();
    this.step='1';
    // this.router.navigate(['/ingreso-material']);

}

subir(){

}

/* Export button */
async export() {
  const wb: XLSX.WorkBook = this.write();
  const filename = 'SheetJSIonic.xlsx';
  try {
    /* generate Blob */
    const wbout: ArrayBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });

    /* find appropriate path for mobile */
    const target: string = this.file.documentsDirectory || this.file.externalDataDirectory || this.file.dataDirectory || '';
    const dentry = await this.file.resolveDirectoryUrl(target);
    const url: string = dentry.nativeURL || '';

    /* attempt to save blob to file */
    await this.file.writeFile(url, filename, wbout, {replace: true});
    alert(`Wrote to SheetJSIonic.xlsx in ${url}`);
  } catch(e) {
    if(e.message.match(/It was determined/)) {
      /* in the browser, use writeFile */
      XLSX.writeFile(wb, filename);
    } else {
      alert(`Error: ${e.message}`);
    }
  }
};

cancelar(){
  this.step='1';
}


}

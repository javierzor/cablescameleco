import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { ModalsobremodalentregasPage } from '../modalsobremodalentregas/modalsobremodalentregas.page';

@Component({
  selector: 'app-modalentregas',
  templateUrl: './modalentregas.page.html',
  styleUrls: ['./modalentregas.page.scss'],
})
export class ModalentregasPage implements OnInit {
  traidopormodalparams: any;

  constructor(
    navParams: NavParams,
    public modalController: ModalController
  )
  
  {
    this.traidopormodalparams=navParams.get('dataparaelmodal');
    console.log('recibido por modalparams', this.traidopormodalparams);

   }

  ngOnInit() {
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  entregarboton(){
    this.traidopormodalparams.tipodemodal='entregar';
    this.abrirmodalsobremodalentregas();
  }

  novedadboton(){
    this.traidopormodalparams.tipodemodal='novedad';
    this.abrirmodalsobremodalentregas();
  }

  async abrirmodalsobremodalentregas(){
      //empieza el modal
      const modal = await this.modalController.create({
        component: ModalsobremodalentregasPage,
        componentProps: {
          cssClass: 'my-custom-class',
          'dataparaelmodal': this.traidopormodalparams,
        }
      });
      
      modal.onDidDismiss().then((data) => {
      });
      console.log('enviando estos datos al modal qr',this.traidopormodalparams);
      return await modal.present();
      //termina el modal
  }

}

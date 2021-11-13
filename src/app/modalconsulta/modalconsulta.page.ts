import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modalconsulta',
  templateUrl: './modalconsulta.page.html',
  styleUrls: ['./modalconsulta.page.scss'],
})
export class ModalconsultaPage implements OnInit {

  traidopormodalparams: any;

  constructor(
    public modalController: ModalController,
    navParams: NavParams

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

}

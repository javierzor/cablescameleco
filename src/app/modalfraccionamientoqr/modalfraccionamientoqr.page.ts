import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modalfraccionamientoqr',
  templateUrl: './modalfraccionamientoqr.page.html',
  styleUrls: ['./modalfraccionamientoqr.page.scss'],
})
export class ModalfraccionamientoqrPage implements OnInit {
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

  
  
  imprimir(){
    
  }
  
}
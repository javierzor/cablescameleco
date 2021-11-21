import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modalqr',
  templateUrl: './modalqr.page.html',
  styleUrls: ['./modalqr.page.scss'],
})
export class ModalqrPage implements OnInit {
  traidopormodalparams: any;

  constructor(
    private router: Router,
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
    this.router.navigate(['/ingreso-material']);
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  
  
  imprimir(){
    
  }
  
}
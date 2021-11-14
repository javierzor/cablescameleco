import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalfraccionamientoqrPage } from './modalfraccionamientoqr.page';

describe('ModalfraccionamientoqrPage', () => {
  let component: ModalfraccionamientoqrPage;
  let fixture: ComponentFixture<ModalfraccionamientoqrPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalfraccionamientoqrPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalfraccionamientoqrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

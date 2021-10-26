import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BloqOrdenFraccionamientoPage } from './bloq-orden-fraccionamiento.page';

describe('BloqOrdenFraccionamientoPage', () => {
  let component: BloqOrdenFraccionamientoPage;
  let fixture: ComponentFixture<BloqOrdenFraccionamientoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BloqOrdenFraccionamientoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BloqOrdenFraccionamientoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

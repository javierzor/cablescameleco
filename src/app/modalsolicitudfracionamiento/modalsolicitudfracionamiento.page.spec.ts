import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalsolicitudfracionamientoPage } from './modalsolicitudfracionamiento.page';

describe('ModalsolicitudfracionamientoPage', () => {
  let component: ModalsolicitudfracionamientoPage;
  let fixture: ComponentFixture<ModalsolicitudfracionamientoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalsolicitudfracionamientoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalsolicitudfracionamientoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

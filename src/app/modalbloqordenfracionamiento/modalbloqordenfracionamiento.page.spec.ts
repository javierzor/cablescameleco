import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalbloqordenfracionamientoPage } from './modalbloqordenfracionamiento.page';

describe('ModalbloqordenfracionamientoPage', () => {
  let component: ModalbloqordenfracionamientoPage;
  let fixture: ComponentFixture<ModalbloqordenfracionamientoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalbloqordenfracionamientoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalbloqordenfracionamientoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

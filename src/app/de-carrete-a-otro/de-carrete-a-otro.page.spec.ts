import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeCarreteAOtroPage } from './de-carrete-a-otro.page';

describe('DeCarreteAOtroPage', () => {
  let component: DeCarreteAOtroPage;
  let fixture: ComponentFixture<DeCarreteAOtroPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DeCarreteAOtroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeCarreteAOtroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalordenarfracciqrPage } from './modalordenarfracciqr.page';

describe('ModalordenarfracciqrPage', () => {
  let component: ModalordenarfracciqrPage;
  let fixture: ComponentFixture<ModalordenarfracciqrPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalordenarfracciqrPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalordenarfracciqrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

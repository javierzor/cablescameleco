import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModaldecarreteaotroPage } from './modaldecarreteaotro.page';

describe('ModaldecarreteaotroPage', () => {
  let component: ModaldecarreteaotroPage;
  let fixture: ComponentFixture<ModaldecarreteaotroPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModaldecarreteaotroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModaldecarreteaotroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalsobremodalentregasPage } from './modalsobremodalentregas.page';

describe('ModalsobremodalentregasPage', () => {
  let component: ModalsobremodalentregasPage;
  let fixture: ComponentFixture<ModalsobremodalentregasPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalsobremodalentregasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalsobremodalentregasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

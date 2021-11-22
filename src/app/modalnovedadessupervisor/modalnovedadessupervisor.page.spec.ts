import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalnovedadessupervisorPage } from './modalnovedadessupervisor.page';

describe('ModalnovedadessupervisorPage', () => {
  let component: ModalnovedadessupervisorPage;
  let fixture: ComponentFixture<ModalnovedadessupervisorPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalnovedadessupervisorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalnovedadessupervisorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

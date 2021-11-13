import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalbloqingresomaterialPage } from './modalbloqingresomaterial.page';

describe('ModalbloqingresomaterialPage', () => {
  let component: ModalbloqingresomaterialPage;
  let fixture: ComponentFixture<ModalbloqingresomaterialPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalbloqingresomaterialPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalbloqingresomaterialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

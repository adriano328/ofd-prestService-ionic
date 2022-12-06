import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScreenServiceByProfessionalPage } from './screen-service-by-professional.page';

describe('ScreenServiceByProfessionalPage', () => {
  let component: ScreenServiceByProfessionalPage;
  let fixture: ComponentFixture<ScreenServiceByProfessionalPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenServiceByProfessionalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScreenServiceByProfessionalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

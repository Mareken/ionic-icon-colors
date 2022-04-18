import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MotorcycleIconComponent } from './motorcycle-icon.component';

describe('MotorcycleIconComponent', () => {
  let component: MotorcycleIconComponent;
  let fixture: ComponentFixture<MotorcycleIconComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MotorcycleIconComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MotorcycleIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

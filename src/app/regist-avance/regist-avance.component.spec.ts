import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistAvanceComponent } from './regist-avance.component';

describe('RegistAvanceComponent', () => {
  let component: RegistAvanceComponent;
  let fixture: ComponentFixture<RegistAvanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistAvanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistAvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

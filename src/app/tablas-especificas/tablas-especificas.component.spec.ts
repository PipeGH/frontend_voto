import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablasEspecificasComponent } from './tablas-especificas.component';

describe('TablasEspecificasComponent', () => {
  let component: TablasEspecificasComponent;
  let fixture: ComponentFixture<TablasEspecificasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablasEspecificasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablasEspecificasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

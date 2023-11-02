import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinacionAdministradorComponent } from './coordinacion-administrador.component';

describe('CoordinacionAdministradorComponent', () => {
  let component: CoordinacionAdministradorComponent;
  let fixture: ComponentFixture<CoordinacionAdministradorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CoordinacionAdministradorComponent]
    });
    fixture = TestBed.createComponent(CoordinacionAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprendizComponent } from './aprendiz.component';

describe('AprendizComponent', () => {
  let component: AprendizComponent;
  let fixture: ComponentFixture<AprendizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AprendizComponent]
    });
    fixture = TestBed.createComponent(AprendizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

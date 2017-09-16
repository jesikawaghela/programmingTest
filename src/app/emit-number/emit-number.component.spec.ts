import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmitNumberComponent } from './emit-number.component';

describe('EmitNumberComponent', () => {
  let component: EmitNumberComponent;
  let fixture: ComponentFixture<EmitNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmitNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmitNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

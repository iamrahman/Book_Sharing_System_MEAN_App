import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EarnonlineComponent } from './earnonline.component';

describe('EarnonlineComponent', () => {
  let component: EarnonlineComponent;
  let fixture: ComponentFixture<EarnonlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarnonlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EarnonlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostbookComponent } from './postbook.component';

describe('PostbookComponent', () => {
  let component: PostbookComponent;
  let fixture: ComponentFixture<PostbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

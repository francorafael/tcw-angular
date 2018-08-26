import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDetailPostComponent } from './dialog-detail-post.component';

describe('DialogDetailPostComponent', () => {
  let component: DialogDetailPostComponent;
  let fixture: ComponentFixture<DialogDetailPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogDetailPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDetailPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

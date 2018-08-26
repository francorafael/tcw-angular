import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAddPageComponent } from './post-add-page.component';

describe('PostAddPageComponent', () => {
  let component: PostAddPageComponent;
  let fixture: ComponentFixture<PostAddPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostAddPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

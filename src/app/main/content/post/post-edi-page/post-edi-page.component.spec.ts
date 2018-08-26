import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostEdiPageComponent } from './post-edi-page.component';

describe('PostEdiPageComponent', () => {
  let component: PostEdiPageComponent;
  let fixture: ComponentFixture<PostEdiPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostEdiPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostEdiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

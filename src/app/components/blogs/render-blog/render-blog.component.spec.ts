import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderBlogComponent } from './render-blog.component';

describe('RenderBlogComponent', () => {
  let component: RenderBlogComponent;
  let fixture: ComponentFixture<RenderBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenderBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

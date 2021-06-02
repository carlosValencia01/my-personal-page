import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderTutorialComponent } from './render-tutorial.component';

describe('RenderTutorialComponent', () => {
  let component: RenderTutorialComponent;
  let fixture: ComponentFixture<RenderTutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenderTutorialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

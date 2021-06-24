import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToApiComponent } from './how-to-api.component';

describe('HowToApiComponent', () => {
  let component: HowToApiComponent;
  let fixture: ComponentFixture<HowToApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowToApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowToApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

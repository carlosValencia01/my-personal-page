import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsNodeComponent } from './what-is-node.component';

describe('WhatIsNodeComponent', () => {
  let component: WhatIsNodeComponent;
  let fixture: ComponentFixture<WhatIsNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatIsNodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatIsNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

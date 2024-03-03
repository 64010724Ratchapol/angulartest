import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeymarComponent } from './neymar.component';

describe('NeymarComponent', () => {
  let component: NeymarComponent;
  let fixture: ComponentFixture<NeymarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NeymarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NeymarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

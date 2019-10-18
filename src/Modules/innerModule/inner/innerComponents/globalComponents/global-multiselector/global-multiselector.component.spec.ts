import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalMultiselectorComponent } from './global-multiselector.component';

describe('GlobalMultiselectorComponent', () => {
  let component: GlobalMultiselectorComponent;
  let fixture: ComponentFixture<GlobalMultiselectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalMultiselectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalMultiselectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

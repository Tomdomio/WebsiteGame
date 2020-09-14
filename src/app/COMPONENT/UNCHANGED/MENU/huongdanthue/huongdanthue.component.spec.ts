import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuongdanthueComponent } from './huongdanthue.component';

describe('HuongdanthueComponent', () => {
  let component: HuongdanthueComponent;
  let fixture: ComponentFixture<HuongdanthueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HuongdanthueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HuongdanthueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

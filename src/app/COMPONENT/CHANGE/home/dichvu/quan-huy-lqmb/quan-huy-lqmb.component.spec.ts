import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanHuyLQMBComponent } from './quan-huy-lqmb.component';

describe('QuanHuyLQMBComponent', () => {
  let component: QuanHuyLQMBComponent;
  let fixture: ComponentFixture<QuanHuyLQMBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanHuyLQMBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanHuyLQMBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

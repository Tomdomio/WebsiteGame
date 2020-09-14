import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UCPubgComponent } from './ucpubg.component';

describe('UCPubgComponent', () => {
  let component: UCPubgComponent;
  let fixture: ComponentFixture<UCPubgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UCPubgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UCPubgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

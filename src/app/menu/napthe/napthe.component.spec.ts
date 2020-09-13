import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaptheComponent } from './napthe.component';

describe('NaptheComponent', () => {
  let component: NaptheComponent;
  let fixture: ComponentFixture<NaptheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaptheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NaptheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

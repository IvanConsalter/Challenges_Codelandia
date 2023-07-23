import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChihiroComponent } from './chihiro.component';

describe('ChihiroComponent', () => {
  let component: ChihiroComponent;
  let fixture: ComponentFixture<ChihiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChihiroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChihiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

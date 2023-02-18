import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JordanShoesComponent } from './jordan-shoes.component';

describe('JordanShoesComponent', () => {
  let component: JordanShoesComponent;
  let fixture: ComponentFixture<JordanShoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JordanShoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JordanShoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

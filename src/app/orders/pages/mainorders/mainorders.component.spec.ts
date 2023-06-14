import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainordersComponent } from './mainorders.component';

describe('MainordersComponent', () => {
  let component: MainordersComponent;
  let fixture: ComponentFixture<MainordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainordersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

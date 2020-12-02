import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderserviceFormComponent } from './orderservice-form.component';

describe('OrderserviceFormComponent', () => {
  let component: OrderserviceFormComponent;
  let fixture: ComponentFixture<OrderserviceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderserviceFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderserviceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

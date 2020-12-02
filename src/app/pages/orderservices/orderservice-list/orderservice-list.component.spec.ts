import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderserviceListComponent } from './orderservice-list.component';

describe('OrderserviceListComponent', () => {
  let component: OrderserviceListComponent;
  let fixture: ComponentFixture<OrderserviceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderserviceListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderserviceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

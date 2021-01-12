import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasetRequestDeleteComponent } from './DatasetRequest-delete.component';

describe('DatasetRequestDeleteComponent', () => {
  let component: DatasetRequestDeleteComponent;
  let fixture: ComponentFixture<DatasetRequestDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatasetRequestDeleteComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatasetRequestDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

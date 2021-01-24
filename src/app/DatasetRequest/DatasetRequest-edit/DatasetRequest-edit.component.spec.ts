import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasetRequestEditComponent } from './DatasetRequest-edit.component';

describe('DatasetRequestEditComponent', () => {
  let component: DatasetRequestEditComponent;
  let fixture: ComponentFixture<DatasetRequestEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatasetRequestEditComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatasetRequestEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

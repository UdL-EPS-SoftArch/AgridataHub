import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasetRequestDetailComponent } from './DatasetRequest-detail.component';

describe('DatasetRequestDetailComponent', () => {
  let component: DatasetRequestDetailComponent;
  let fixture: ComponentFixture<DatasetRequestDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatasetRequestDetailComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatasetRequestDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasetModifyComponent } from './dataset-modify.component';

describe('DatasetModifyComponent', () => {
  let component: DatasetModifyComponent;
  let fixture: ComponentFixture<DatasetModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatasetModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatasetModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

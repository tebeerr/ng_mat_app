import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableListContainerComponent } from './table-list-container.component';

describe('TableListContainerComponent', () => {
  let component: TableListContainerComponent;
  let fixture: ComponentFixture<TableListContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableListContainerComponent]
    });
    fixture = TestBed.createComponent(TableListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

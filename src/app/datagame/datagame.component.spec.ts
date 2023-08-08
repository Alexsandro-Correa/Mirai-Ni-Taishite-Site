import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatagameComponent } from './datagame.component';

describe('DatagameComponent', () => {
  let component: DatagameComponent;
  let fixture: ComponentFixture<DatagameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatagameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatagameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

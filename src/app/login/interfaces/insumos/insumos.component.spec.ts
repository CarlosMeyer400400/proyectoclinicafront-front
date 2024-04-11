/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InsumosComponent } from './insumos.component';

describe('InsumosComponent', () => {
  let component: InsumosComponent;
  let fixture: ComponentFixture<InsumosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsumosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsumosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

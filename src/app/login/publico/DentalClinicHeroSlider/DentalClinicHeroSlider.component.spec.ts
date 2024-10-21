/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DentalClinicHeroSliderComponent } from './DentalClinicHeroSlider.component';

describe('DentalClinicHeroSliderComponent', () => {
  let component: DentalClinicHeroSliderComponent;
  let fixture: ComponentFixture<DentalClinicHeroSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DentalClinicHeroSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DentalClinicHeroSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

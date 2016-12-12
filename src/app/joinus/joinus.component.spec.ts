/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JoinusComponent } from './joinus.component';

describe('JoinusComponent', () => {
  let component: JoinusComponent;
  let fixture: ComponentFixture<JoinusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

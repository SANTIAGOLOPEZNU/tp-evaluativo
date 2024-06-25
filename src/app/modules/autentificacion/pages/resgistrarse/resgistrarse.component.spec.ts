import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResgistrarseComponent } from './resgistrarse.component';

describe('ResgistrarseComponent', () => {
  let component: ResgistrarseComponent;
  let fixture: ComponentFixture<ResgistrarseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResgistrarseComponent]
    });
    fixture = TestBed.createComponent(ResgistrarseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

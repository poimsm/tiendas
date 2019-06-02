import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDComponent } from './header-d.component';

describe('HeaderDComponent', () => {
  let component: HeaderDComponent;
  let fixture: ComponentFixture<HeaderDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

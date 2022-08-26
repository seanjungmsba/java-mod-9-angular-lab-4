import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationComponentComponent } from './application-component.component';

describe('ApplicationComponentComponent', () => {
  let component: ApplicationComponentComponent;
  let fixture: ComponentFixture<ApplicationComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

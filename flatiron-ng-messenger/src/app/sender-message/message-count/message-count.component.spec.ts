import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageCountComponent } from './message-count.component';

describe('MessageCountComponent', () => {
  let component: MessageCountComponent;
  let fixture: ComponentFixture<MessageCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageCountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

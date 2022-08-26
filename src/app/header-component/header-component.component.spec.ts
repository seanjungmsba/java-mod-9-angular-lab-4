import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponentComponent } from './header-component.component';

describe('HeaderComponentComponent', () => {
  let component: HeaderComponentComponent;
  let fixture: ComponentFixture<HeaderComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the text "Welcome"', () => {
    const componentHTML: HTMLElement = fixture.nativeElement;
    expect(componentHTML.textContent).toContain('Welcome');
  });

  it('should contain the text "Welcome" in an <h2> header', () => {
    const componentHTML: HTMLElement = fixture.nativeElement;
    const h2Header = componentHTML.querySelector('h2');
    expect(h2Header.textContent).toContain('Welcome');
  });

  it('should contain the name of the active user from the controller', () => {
    const activeUser = component.activeUser;
    const componentHTML: HTMLElement = fixture.nativeElement;
    expect(componentHTML.textContent).toContain(activeUser.firstName);
  });
});

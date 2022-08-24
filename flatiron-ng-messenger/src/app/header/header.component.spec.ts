import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

// describe('HeaderComponent', () => {
//   let component: HeaderComponent;
//   let fixture: ComponentFixture<HeaderComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ HeaderComponent ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(HeaderComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

describe("HeaderComponentComponent", () => {
  // We declare a variable to hold an instance of the component we want to test, in this case it's HeaderComponentComponent
  let component: HeaderComponent;

  // We declare a variable to hold an instance of the component fixture associated with the component we want to test
  // ComponentFixture is an Angular core class that gives us access to the component and to information about the component within the context of Angular.
  let fixture: ComponentFixture<HeaderComponent>;

  // Since compileComponents() is an asynchronous function, we have to await for its completion, which is why its call is wrapped in the async() and await construct
  beforeEach(async () => {
    // We call the TestBed.configurationTestingModule() function to
    // initialize the testing module like our root module would be
    // initialized when our application is running inside the browser.
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      // We then call the compileComponents() function to execute their configuration
    }).compileComponents();

    // We can then get both the fixture for the component and the component itself.
    fixture = TestBed.createComponent(HeaderComponent);
    // Note that getting the component itself is a convenience, as we could always use
    // the fixture variable to get to the component through its fixture.componentInstance property
    component = fixture.componentInstance;
    // We then ask Jasmine to detectChanges() in the component in the same way that Angular would when it's running inside the browser
    fixture.detectChanges();
  });

  // Now we can write our first actual component test
  // Here, we make a simple assertion that our component should have been created.
  // This is not a very useful functional test other than it does validate that our test
  // configuration is correct and leads to the actual creation of the component we want to test.
  it("should create the component", () => {
    expect(component).toBeTruthy();
  });

  // Now we've started to test our actual component - in this case, making sure that it has the "welcome" text somewhere in it.
  // Note that "somewhere in it" is a pretty flexible way to test that the text is there, but not be so specific as to need to be
  // updated every time the layout of the component is changed slightly.
  it('should contain the text "Welcome"', () => {
    const componentHTML: HTMLElement = fixture.nativeElement;
    expect(componentHTML.textContent).toContain("Welcome");
  });

  // This test passes as well, but will break if we update our view to use an h3 instead of an h2 to display our welcome message.
  // Because the querySelector() returns the first HTML element it finds that matches it, this h2-based test also fails if we add another header to our component.
  it('should contain the text "Welcome" in an <h2> header', () => {
    const componentHTML: HTMLElement = fixture.nativeElement;
    const h2Header = componentHTML.querySelector("h2");
    expect(h2Header.textContent).toContain("Welcome");
  });

});

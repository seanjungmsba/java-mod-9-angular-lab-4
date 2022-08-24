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

describe("'describe()' is a Jasmine function that lets us define a test suite", () => {
  let testRunCount: number = 0;

  beforeEach(() => {
    testRunCount++;
    console.log("'beforeEach()' has run " + testRunCount + " time(s)");
  });

  it("'it()' is a Jasmine function that lets us define a test case", () => {
    expect(true).toBe(true);
  });

  it("should fail in order to demonstrate what a test failure looks like in Karma", () => {
    expect(false).toBe(true);
  });
});

import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[appHighlight]",
})
export class HighlightDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = "red";
  }
}

// 1. we import ElementRef from Angular's core package: import { Directive, ElementRef } from '@angular/core';
// 2. we ask Angular to a variable of type ElementRef into the constructor: constructor(private el: ElementRef)
// 3. we can then use this el variable to access the actual element and change any of its attributes
// 4. in this case, we choose to access its current style and give it a backgroundColor of red

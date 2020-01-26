import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
	selector: '[appMyClass]'
})
export class MyClassDirective {
	// @Input() backgroundColor: string;

	constructor(private element: ElementRef) {
		// console.log('My Class directive used!');
		// this.element.nativeElement.style.backgroundColor = this.backgroundColor; - no  update!
	}

	// @Input('appMyClass') set backgroundColor(color: string) {
	// this.element.nativeElement.style.backgroundColor = color;
	// }
	@Input('appMyClass')
	set className(objClass: any) {
		for (const key in objClass) {
			if (objClass[key]) {
				this.element.nativeElement.classList.add(key);
			} else {
				this.element.nativeElement.classList.remove(key);
			}
		}
	}
}

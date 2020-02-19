import { Directive, Renderer2, OnInit, ElementRef, HostListener } from '@angular/core';

@Directive({
	selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
	constructor(private renderer: Renderer2, private el: ElementRef) {}
	ngOnInit() {
		this.renderer.setStyle(this.el.nativeElement, 'background-color', 'blue');
	}
	@HostListener('mouseenter')
	mouseOverEl(evntData: Event) {
		this.renderer.setStyle(this.el.nativeElement, 'color', 'green');
	}
	@HostListener('mouseleave')
	mouseOutEl(evntData: Event) {
		this.renderer.setStyle(this.el.nativeElement, 'color', 'black');
	}
}

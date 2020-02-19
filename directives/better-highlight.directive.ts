import {
	Directive,
	Renderer2,
	OnInit,
	ElementRef,
	HostListener,
	Input
} from '@angular/core';

@Directive({
	selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
	@Input() defaultColor: string = 'transparent';
	@Input() newColor: string = 'blue';

	constructor(private renderer: Renderer2, private el: ElementRef) {}
	ngOnInit() {
		this.renderer.setStyle(this.el.nativeElement, 'background-color', 'blue');
	}
	@HostListener('mouseenter') // for eny event
	mouseOverEl(evntData: Event) {
		this.renderer.setStyle(this.el.nativeElement, 'color', this.defaultColor);
	}
	@HostListener('mouseleave')
	mouseOutEl(evntData: Event) {
		this.renderer.setStyle(this.el.nativeElement, 'color', this.newColor);
	}
}

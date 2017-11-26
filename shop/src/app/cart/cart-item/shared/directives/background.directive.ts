import { Directive, ElementRef, Renderer2, Input, AfterViewInit, HostListener, HostBinding } from '@angular/core';

@Directive({ selector: '[app-background]' })
export class BackgroundDirective {

    constructor(private renderer: Renderer2, private el: ElementRef) { }

    @Input() backgroundColor: string;

    ngAfterViewInit() {
    }

    @HostListener("mouseenter") onMouseEnter() {
        this.setBackgroundColor("red");
    }

    @HostListener("mouseleave") onMouseLeave() {
        this.setBackgroundColor("white");
    }

    @HostBinding("style.cursor") get getCursor() {
        return "pointer";
    }

    setBackgroundColor(color) {
        this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
    }
}
import { AfterViewInit, Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements AfterViewInit{

  @Input() color = "orange";

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.setColor(this.color);
  }
  setColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement,"color",color);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setColor('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setColor(this.color);
  }

}

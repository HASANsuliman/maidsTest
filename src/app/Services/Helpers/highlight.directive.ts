import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
highlightColor = '#52a0ab';
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', this.highlightColor);
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1.05)');
    this.renderer.setStyle(this.el.nativeElement, 'box-shadow', '0px 4px 8px rgba(0, 0, 0, 0.2)');
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'transform 0.3s, box-shadow 0.3s');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeStyle(this.el.nativeElement, 'background-color');
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1)');
    this.renderer.removeStyle(this.el.nativeElement, 'box-shadow');
  }
}

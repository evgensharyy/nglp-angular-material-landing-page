import { Directive, HostListener, Output, EventEmitter, Input } from '@angular/core';

export type SE = {
  
  header: boolean,
  bottom: boolean

};

declare const window: Window;

@Directive({
  selector: '[nglp-scroll]'
})

export class nglpScrollDirective {
  @Output() public onScroll = new EventEmitter<SE>();

  constructor() { }

  
  @HostListener('scroll', ['$event']) public scrolled($event: Event) {
    this.elementSE($event);
  }

  
  @HostListener('window:scroll', ['$event']) public windowScrolled($event: Event) {
    this.windowSE($event);
  }

  protected windowSE($event: Event) {
    const target = <Document>$event.target;
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const header = scrollTop < 200;
    const bottom = scrollTop > 200;
    const emitVal: SE = {header, bottom};
    this.onScroll.emit(emitVal);
  }

  protected elementSE($event: Event) {
    const target = <HTMLElement>$event.target;
    const header = target.scrollTop < 200;
    const bottom = target.scrollTop > 200;
    const emitVal: SE = {header, bottom};
    this.onScroll.emit(emitVal);
  }

}
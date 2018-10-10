import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { nglpScrollDirective } from './scroll.directive';
import { AboutDirective } from './about.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    nglpScrollDirective,
    AboutDirective
  ],
  exports: [
    nglpScrollDirective,
    AboutDirective
  ]
})
export class DirectivesModule { }
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appEstiloHermanos]',
  standalone: true
})
export class EstiloHermanosDirective {

  constructor( private element: ElementRef) { 
    this.element.nativeElement.style.backgroundColor = 'green'
  }
  /* esto se lo llevamos por ejemplo al h3 de Padre y Hermano */

}

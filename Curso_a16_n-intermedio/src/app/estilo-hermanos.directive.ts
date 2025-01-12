import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appEstiloHermanos]',
  standalone: true
})
export class EstiloHermanosDirective {

  constructor( private element: ElementRef) { 
    this.element.nativeElement.style.textTransform = 'capitalize'
    /* Esto pondría en mayuscula la primera letra  */
  }
  /* esto se lo llevamos por ejemplo al h3 de Padre y Hermano */

}

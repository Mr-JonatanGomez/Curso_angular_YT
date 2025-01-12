import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'miPipePers',
  standalone: true
})
export class MiPipePersPipe implements PipeTransform {


  /* transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  } */

    transform(valor: string | undefined):string {
        return valor?.toUpperCase() || ""
    }

}

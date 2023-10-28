import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroGeneral',
})
export class FiltroGeneralPipe implements PipeTransform {
  transform(value: any, arg: any): any {
    const results: any = [];

    const contAux = value;

    for (const user of contAux) {
      if (user.municipio.indexOf(arg) > -1) {
        results.push(user);
      } else if (user.hora.indexOf(arg) > -1) {
        results.push(user);
      }
    }

    return results;
  }
}

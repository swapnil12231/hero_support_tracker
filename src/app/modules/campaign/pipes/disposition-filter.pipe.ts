import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dispositionFilter'
})
export class DispositionFilterPipe implements PipeTransform {

  transform(list: any[], campId: number): any {
    return list.filter((e: any) => e.campId == campId).flatMap(e => e.values);
  }

}

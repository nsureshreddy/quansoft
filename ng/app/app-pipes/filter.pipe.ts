import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], filter: any): any[] {
    const key: string = filter.key;
    if (!items) {
      return [];
    }
    if (!filter || !filter.value) {
      return items;
    }

    return items.filter(it => {
      return it['' + key] === filter.value;
    });
  }
}

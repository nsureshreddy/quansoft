import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(items: any[], term: any): any[] {
    let key: string = term;
    if (!items) {
      return [];
    }
    if (!term) {
      return items;
    }

    return items.filter(o =>
        Object.keys(o).some(k => 
            o[k].toString().toLowerCase().includes(term.toLowerCase())
       
    ));
  }
}
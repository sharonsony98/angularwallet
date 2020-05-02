import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchby'
})
export class SearchbyPipe implements PipeTransform {

  transform(value: any[], searchText: any, _property: string): any[] {
    if (searchText) {
      return value.filter((it: any) => { return it["date"].includes(searchText) });
    }
    else
      return value;
  }

}





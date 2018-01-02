import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: any[], property: string, isAscending: boolean = false): any {
    if (!value || value.length === 0 || !property) {
      return;
    }

    if (Array.isArray(value)) {
      return this.sortArray(value, property, isAscending);
    }
  }

  private sortArray(value: any[], property: any, isAscending: boolean): any[] {
    return value.sort((a, b) => {
      if (a[property] > b[property]) {
        return isAscending ? 1 : -1;
      }
      if (a[property] < b[property]) {
        return isAscending ? -1 : 1;
      }
      return 0;
    });
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checked',
  pure: false
})
export class CheckedPipe implements PipeTransform {

  transform(items: any[], key: string): any {
    return items.filter(item => item[key]);
  }
}

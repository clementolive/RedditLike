import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
  pure:true,
})
export class CapitalizePipe implements PipeTransform {

  //Capitalize first letter and adds a signature 
  transform(value: string, signature: string): string {
    if(!value) return value;

    return value.charAt(0).toUpperCase() + value.slice(1) + ' ' + signature;
  }

}

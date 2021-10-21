import { Pipe, PipeTransform } from '@angular/core';
import { Client } from '../Model/client';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], arg: any): any {
   if(arg === '' || arg === undefined){
     return value;
   }
   
    return  value.filter( Client => Client.code_sioval.toLowerCase().indexOf(arg) != -1);
    console.log(value)

  }

}

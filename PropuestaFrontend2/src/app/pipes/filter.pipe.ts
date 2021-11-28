import { Pipe, PipeTransform } from '@angular/core';
import { Client } from '../Model/client';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(clients: Client[], page: number = 0, search: string = ''): Client[] {

    //Devolver informacion si no hay nada en el buscador 
    if (search.length == 0) {
      return clients.slice(page, page + 10);
    }

    if (clients.length < 3) {
       return clients }

    const filteredCodigosioval = clients.filter(client =>
      client.code_sioval.toLowerCase().includes(search.toLowerCase()));
    return filteredCodigosioval.slice(page, page + 10);

  }


}
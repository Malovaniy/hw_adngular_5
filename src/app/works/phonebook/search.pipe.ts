import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from 'src/shared/interface/userhw4.interface';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Array<IUser>, field: string): Array<IUser> {


    if(!field){
      return value
    }
    if(!value){
      return [  ]
    }
      
    return  value.filter(item => item.fname.toLocaleLowerCase().
    includes(field.toLocaleLowerCase()) || item.sname.toLocaleLowerCase().includes(field.toLocaleLowerCase())||
    item.number.includes(field))

      
  
    
  }

}

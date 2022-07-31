import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  getPeople():Observable<any> {
    let peopleArray = [
      {
        firstName: 'Johannes',
        lastName: 'Pablo Rey',
        age: 26
      },
      {
        firstName: 'Jhemila',
        lastName: 'Paula Rey',
        age: 27
      },
      {
        firstName: 'Johanna',
        lastName: 'Camilla Rey',
        age: 21
      },
      {
        firstName: 'Jakob',
        lastName: 'Rey',
        age: 80
      },
      {
        firstName: 'Eliude',
        lastName: 'Rey Pereira de Souza',
        age: 56
      }
    ]

    return of(peopleArray);
  }
}

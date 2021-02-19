import { Injectable } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../shared/mockHeroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

hero?: Hero;

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable <Hero[]>{
    console.log('You provide de data from services');
    console.log('You are Async call thanks to the observable');
    // TODO: send message after fetching the heroes
    this.messageService.addMe(`HeroService: Fetched Heroes`);
    return of(HEROES);
  }
  getHero(id: number): Observable<Hero | undefined>{

    this.messageService.addMe(`HeroService: Fetched with id: ${id}`);

    // return of(HEROES.find(hero => hero.id === id));
    return of(HEROES.find(hero => hero.id === id));

  }
}

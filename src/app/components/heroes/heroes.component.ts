import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/hero';
import { HEROES } from '../../shared/mockHeroes'

import { HeroService } from '../../services/hero.service';


@Component({
  selector: 'pr-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // hero: string = "Windstorm";
  // hero: Hero = { id: 1, name: "Radgard"}
  heroes?: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(){
   this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes.slice(1, 5)));
  }

}

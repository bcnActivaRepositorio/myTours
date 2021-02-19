import { Component, OnInit } from '@angular/core';
import { Hero } from '../../hero';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from 'src/app/services/hero.service';


@Component({
  selector: 'pr-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  // input
  hero?: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location) { }

  ngOnInit(): void {

    this.getHero();
  }

  getHero():void{
    //  const id = +this.route.snapshot.paramMap.get('id');
    
    let id: any = (this.route.snapshot.paramMap.get('id'));
    id = Number(id);
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);

  }
  goBack(): void{
    this.location.back();
  }
}
// answer to error from str to num Typescript object null
// https://stackoverflow.com/questions/43951090/typescript-object-is-possibly-null

// convert to a number
// https://stackoverflow.com/questions/14667713/how-to-convert-a-string-to-number-in-typescript

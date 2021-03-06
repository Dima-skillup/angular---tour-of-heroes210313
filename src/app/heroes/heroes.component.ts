import { Component, OnInit } from '@angular/core';

import {HEROES} from '../mock-heroes';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];
  selectedHero?: Hero;

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

}

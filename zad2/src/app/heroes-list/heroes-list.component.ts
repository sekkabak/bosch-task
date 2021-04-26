import { Component, OnInit } from '@angular/core';
import data from '../../assets/data.json';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {
  public heroes: {id: number, name: string, ability: string, image: string}

  constructor() {

  }

  ngOnInit(): void {
    this.heroes = data;
  }

}

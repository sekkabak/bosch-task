import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-record',
  templateUrl: './heroes-record.component.html',
  styleUrls: ['./heroes-record.component.css']
})
export class HeroesRecordComponent implements OnInit {
  @Input() id: number;
  @Input() name: string;
  @Input() ability: string;
  @Input() image: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}

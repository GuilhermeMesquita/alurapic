import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ap-card',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() title: string = "";

  constructor() { }

  ngOnInit() {
  }

}

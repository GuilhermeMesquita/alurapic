import { Component, Input, OnInit } from '@angular/core';
import { PhotoModel } from './photo';

@Component({
  selector: 'ap-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  @Input() description = '';

  @Input() url = '';
  constructor() { }

  ngOnInit(): void {
  }

}

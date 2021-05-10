import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-read-more-card',
  templateUrl: './read-more-card.component.html',
  styleUrls: ['./read-more-card.component.scss'],
})
export class ReadMoreCardComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;

  constructor() {}

  ngOnInit(): void {}
}

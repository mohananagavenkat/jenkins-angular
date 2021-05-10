import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-dropdown',
  templateUrl: './my-dropdown.component.html',
  styleUrls: ['./my-dropdown.component.scss'],
})
export class MyDropdownComponent implements OnInit {
  @Input('dropDownText') text: string;
  @Input('dropDownItems') items: string[];
  constructor() {}

  ngOnInit(): void {}
}

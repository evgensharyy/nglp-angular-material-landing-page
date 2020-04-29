import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})
export class HeadingComponent implements OnInit {

  isHeading = true;
  isSubheading = true;
  isHeadingBtn = true;

  constructor() { }

  ngOnInit() {
  }

}

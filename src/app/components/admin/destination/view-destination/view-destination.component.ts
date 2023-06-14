import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-destination',
  templateUrl: './view-destination.component.html',
  styleUrls: ['./view-destination.component.css']
})
export class ViewDestinationComponent implements OnInit {
  destinations:any;
  constructor() { }

  ngOnInit(): void {
  }

}

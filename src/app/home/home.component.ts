import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Hola Cat Lovers';
  info = 'This is an amazing app for everyone who loves cats <3';

  constructor() { }

  ngOnInit() {
  }

}

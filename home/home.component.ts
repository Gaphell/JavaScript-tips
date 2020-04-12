import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  titles = Array(5).fill('Check Me');
  subCategories = Array(3).fill('Food');
  constructor() { }

  ngOnInit(): void {
  }

}

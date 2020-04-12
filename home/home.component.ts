import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  titles = Array(5).fill('Check Me');
  names = Array(4).fill({category: 'orange', name: '🍊'});
  uniqueNames = [];
  numbers = this.generateNumbers();
  slice = false;
  initialLength: number;
  numberObject = {};
  show = false;
  view = false;
  peopleObject = {male: '✌️', female: '✌️'};
  arrayObject = [];

  constructor() {
  }

  ngOnInit(): void {
    this.names.push(
      {category: 'rice', name: '🍚'},
      {category: 'pineapple', name: '🍍'},
      {category: 'apple', name: '🍎'},
      {category: 'strawberry', name: '🍓'},
      {category: 'pizza', name: '🍕'},
      {category: 'burger', name: '🍔'});
    this.uniqueNames = Array.from(new Set(this.names));
  }

  generateNumbers() {
    const list = [];
    for (let i = 0; i <= 9; i++) {
      list.push(i);
    }
    this.initialLength = list.length;
    return list;
  }

  sliceArray() {
    this.slice = !this.slice;
    this.slice ? this.numbers.length = 4 : this.numbers = this.generateNumbers();
  }

  convertToObject() {
    this.show = !this.show;
    this.numberObject = {...this.numbers};
  }

  convertToArray() {
    this.view = !this.view;
    this.arrayObject = Object.values(this.peopleObject);
  }
}

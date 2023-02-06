import { Component, OnInit } from '@angular/core';
import { Data } from './data';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor() {}
  listData: any;
  searchData: any;
  ngOnInit() {
    this.listData = Data;
    this.searchData = Data;
  }

  increasing(property: any, IncDec: any) {
    const sortOrder = IncDec == 'Asc' ? 1 : -1;

    console.log(property, IncDec);
    this.listData.sort((a, b) => {
      const x =
        typeof a[property] === 'string'
          ? a[property].toLowerCase()
          : a[property];
      const y =
        typeof b[property] === 'string'
          ? b[property].toLowerCase()
          : b[property];
      if (x > y) {
        return sortOrder * 1;
      } else {
        return sortOrder * -1;
      }
    });
  }
  search(event: any) {
    let filter = event.target.value;
    let arr = this.searchData.filter((item) => {
      return item.name.toLowerCase().includes(filter.toLowerCase());
    });
    this.listData = arr;
  }
}

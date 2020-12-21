import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as data from '../data.json';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  data = [];
  startIndex = 0;
  endIndex = 12;
  hightolowData = [];
  lowtohighData = [];
  relevance = ['HighToLow', 'LowToHigh'];
  chosenRelevance = 'HighToLow';

  constructor(private Activatedroute: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    this.Activatedroute.queryParamMap.subscribe(params => {
      let temp = params.get('sortType');
      if (temp != undefined || temp != null) {
        (temp == 'hightolow') ? this.chosenRelevance = 'HighToLow' : this.chosenRelevance = 'LowToHigh';
      }
    })
    let temp1 = Object.assign([], (data as any).default);
    let temp2 = Object.assign([], (data as any).default);
    let hl = temp1.sort((a, b) => b.Price - a.Price);
    let lh = temp2.sort((a, b) => a.Price - b.Price);
    this.hightolowData = hl;
    this.lowtohighData = lh;
    // this.data = Object.assign([], this.hightolowData.slice(this.startIndex, this.endIndex));
    this.finaliseData();
  }

  addMore() {
    this.startIndex = this.endIndex;
    this.endIndex = this.endIndex + 12;
    if (this.endIndex > 36) {
      return;
    }
    if (this.chosenRelevance == 'HighToLow') {
      let temp = this.hightolowData.slice(this.startIndex, this.endIndex);
      temp.forEach(element => {
        this.data.push(element);
      });
    } else {
      let temp = this.lowtohighData.slice(this.startIndex, this.endIndex);
      temp.forEach(element => {
        this.data.push(element);
      });
    }
    console.log(this.data);
  }

  finaliseData() {
    this.startIndex = 0;
    this.endIndex = 12;
    this.data = [];
    if (this.chosenRelevance == 'HighToLow') {
      let temp = this.hightolowData.slice(this.startIndex, this.endIndex);
      temp.forEach(element => {
        this.data.push(element);
      });
      // this.router.navigate(['/list'], { queryParams: { sortType: 'hightolow' } })
    } else {
      let temp = this.lowtohighData.slice(this.startIndex, this.endIndex);
      temp.forEach(element => {
        this.data.push(element);
      });
      // this.router.navigate(['/list'], { queryParams: { sortType: 'lowtohigh' } })
    }
  }

  onChange() {
    if (this.chosenRelevance == 'HighToLow') {
      this.router.navigate(['/list'], { queryParams: { sortType: 'hightolow' } });
      this.finaliseData();
    } else {
      this.router.navigate(['/list'], { queryParams: { sortType: 'lowtohigh' } });
      this.finaliseData();
    }


  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
    console.log(event);
    if (event.target.offsetHeight + event.target.scrollTop >= (event.target.scrollHeight - 100)) {
      console.log('e')

      this.addMore();
    }
  }

}

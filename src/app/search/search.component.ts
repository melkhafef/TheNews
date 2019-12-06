import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CalendarEvent, CalendarView } from 'angular-calendar';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
state : any;
news : any ;
keyword : any ;
  viewDate: Date = new Date();
   events= [];
  constructor(private router:Router) { }
  ngOnInit() {
    this.state="initial";
    
  }
  addEvent(title,date): void {
    this.events = [
      ...this.events,
      {
        title: title,
        start: new Date(date)
      }
    ];
  }
goToHeadlinesPage(){
  this.router.navigateByUrl('/headline');
}
searchForNews(e){
  this.events=[];
  this.news = undefined;
  this.keyword=e.target.value;
  if(e.target.value == ''){
    this.state="initial";
  }
  else{
    this.state = "searching";
    var url = 'https://newsapi.org/v2/everything?' +
      `q=${e.target.value}&` +
      'from=2019-12-01&' +
      'sortBy=popularity&' +
      'apiKey=36bd61cfe82347d5a0f68519a3ab008a';

    var req = new Request(url);
    let self = this;
    fetch(req)
      .then(function (response) {
        response.json().then(function (json) {
          console.log(json);
          self.news = json;
          self.events=[];
          for(let i=0 ; i<json.articles.length;i++){
            self.addEvent(json.articles[i].title, json.articles[i].publishedAt);
          }
        })
      })
  }
  console.log(e.target.value);
}
  dayClicked(e){
    var url = 'https://newsapi.org/v2/everything?' +
      `q=${this.keyword}&` +
      'from=2019-12-01&' +
      'sortBy=popularity&' +
      'apiKey=36bd61cfe82347d5a0f68519a3ab008a';

    var req = new Request(url);
    let self = this;
    fetch(req)
      .then(function (response) {
        response.json().then(function (json) {
          console.log(json);
          self.news = json;
          let newsInDay = [];
          let date;
          for (let i = 0; i < self.news.articles.length; i++) {
            date = new Date(self.news.articles[i].publishedAt);
            if (e.day.date.getMonth() == date.getMonth() && e.day.date.getDate() == date.getDate()) {
              newsInDay.push(self.news.articles[i]);
            }
          }
          self.news.articles = newsInDay;
        })
      })
   
  }
}

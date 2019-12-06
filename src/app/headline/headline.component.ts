import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.scss']
})
export class HeadlineComponent implements OnInit {
  constructor(private router:Router) { }
 news : any;
  ngOnInit() {
    let self = this;
    var url = 'https://newsapi.org/v2/top-headlines?' +
      'country=us&' +
      'apiKey=36bd61cfe82347d5a0f68519a3ab008a';
    var req = new Request(url);
     fetch(req)
      .then(function (response) {
        response.json().then(function(json){
          console.log(json);
          self.news=json;
        })
      })
  }
  goToSearchPage(){
  console.log("works");
  this.router.navigateByUrl('/search');
}
}
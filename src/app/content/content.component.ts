import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  myScroll(){
    if( (document.body.scrollTop > 100) || (document.documentElement.scrollTop > 100) ) {
      console.log("scrolled more than 100");
    }
  }

  scrollTop() {
    console.log("scroll top");
    document.getElementById("#myDiv").scrollTop = 0;
  }

}

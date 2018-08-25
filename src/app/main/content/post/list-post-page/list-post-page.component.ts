import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-post-page',
  templateUrl: './list-post-page.component.html',
  styleUrls: ['./list-post-page.component.css']
})
export class ListPostPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("entrou page");
  }

}

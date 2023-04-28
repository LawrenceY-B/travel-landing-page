import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-cards',
  templateUrl: './service-cards.component.html',
  styleUrls: ['./service-cards.component.scss']
})
export class ServiceCardsComponent implements OnInit {
@Input() title: string =""
@Input() text: string =""
@Input() ImgUrl: string =""
  constructor() { }

  ngOnInit(): void {
  }

}

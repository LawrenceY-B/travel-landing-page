import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-destination-cards',
  templateUrl: './destination-cards.component.html',
  styleUrls: ['./destination-cards.component.scss']
})
export class DestinationCardsComponent implements OnInit {
  @Input() city: string = ""
  @Input() price: string = ""
  @Input() duration: string = ""
  @Input() ImgUrl: string = ""
  constructor() { }

  ngOnInit(): void {
  }

}

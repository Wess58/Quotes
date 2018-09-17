import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes'

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quotes:Quotes;
  @Output() isComplete= new EventEmitter<boolean>();

quotesDelete(complete:boolean){
  this.isComplete.emit(complete);  // @Output ()

}
// ATTEMPT buttons__START
    incrementLikes(){
      this.quotes.likes += 1;
    }
    incrementDislikes(){
      this.quotes.dislikes += 1;
    }
    // __END
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
          // create the quotes array, plural since the array properties
        quotes = [
          new Quotes (1,'Happiness is when what you think, what you say and what you do are in harmony.','Mahatma Gandhi','Mbate w.g'),
          new Quotes (2,'Happiness is when what you think, what you say and what you do are in harmony.','Mahatma Gandhi','Mbate w.g'),
          new Quotes (3,'Happiness is when what you think, what you say and what you do are in harmony.','Mahatma Gandhi','Mbate w.g'),
          new Quotes (4,'Happiness is when what you think, what you say and what you do are in harmony.','Mahatma Gandhi','Mbate w.g'),

        ]
        toogleDetails(index){
          this.quotes[index].showDescription = !this.quotes[index].showDescription;
        }
  constructor() { }
          //ngOnInit is a life cycle hook. Life cycle hooks are called to show different stages in the life cycle of a component
  ngOnInit() {
  }

}

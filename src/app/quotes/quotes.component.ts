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
    new Quotes(1, 'Happiness is when what you think, what you say and what you do are in harmony.', 'Mahatma Gandhi', 'Mbate w.g', 0, 0),
    new Quotes(2, 'Sorrow spares no one, and scars respect no person. ', 'Sherrilyn Kenyon', 'Mbate w.g', 0, 0),
    new Quotes(3, 'Controversy is a last resort for the talentless.', ' Criss Jami', 'Mbate w.g', 0, 0),
    new Quotes(4, 'Life is pain. Anyone who says differently is selling something.', 'Sherrilyn Kenyon', 'Mbate w.g', 0, 0),
    new Quotes(5, 'Heroes are made by the path they choose, not the powers they are graced with.', 'Iron Man', 'Mbate w.g', 0, 0),
    new Quotes(6, 'If you cage the beast, the beast will get angry.', 'Wolverine', 'Mbate w.g', 0, 0),

  ]
  addNewQuotes(quotes) {
    let quotesLength = this.quotes.length;
    quotes.id = quotesLength + 1;
    this.quotes.push(quotes)

  }

  toogleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  // to delete completed quotes
  deleteQuotes(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].id + " quote"}`)

      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }

      constructor() { }
      //ngOnInit is a life cycle hook. Life cycle hooks are called to show different stages in the life cycle of a component
      ngOnInit() {
      }

    }

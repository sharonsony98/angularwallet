import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranshistoryService } from '../transhistory.service';
import { Transhistory } from '../transhistory';

@Component({
  selector: 'app-pass-book',
  templateUrl: './pass-book.component.html',
  styleUrls: ['./pass-book.component.css']
})
export class PassBookComponent implements OnInit {

  transhistory: Transhistory = new Transhistory();
  constructor(private TranshistoryService: TranshistoryService, private route: Router) { }

  showDetails() {
    console.log('search by date');
  }

  ngOnInit(): void {
  }

}

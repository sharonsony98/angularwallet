import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BalanceService } from '../balance.service';
import { Balance } from '../balance';
@Component({
  selector: 'app-check-balance',
  templateUrl: './check-balance.component.html',
  styleUrls: ['./check-balance.component.css']
})
export class CheckBalanceComponent implements OnInit {

  balance: Balance = new Balance();
  constructor(private BalanceService: BalanceService, private route: Router) { }

  ngOnInit(): void {
  }

}

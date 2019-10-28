import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/models/account.model';
import { LocalStorageService } from 'src/app/services/localStorageService';

@Component({
  selector: 'app-baby-header',
  templateUrl: './baby-header.page.html',
  styleUrls: ['./baby-header.page.scss'],
})
export class BabyHeaderPage implements OnInit {
  account: Account;

  constructor(
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit() {
    this.account = this.localStorageService.getObject('user');
  }

}

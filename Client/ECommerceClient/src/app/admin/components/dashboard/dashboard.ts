import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Base, SpinnerType } from '../../../base/base';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard extends Base implements OnInit {
  constructor(spinner: NgxSpinnerService){
    super(spinner);
  }

  ngOnInit(): void {
      this.showSpinner(SpinnerType.BallScaleMultiple);
  }
}

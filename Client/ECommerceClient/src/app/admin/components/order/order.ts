import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-order',
  standalone: false,
  templateUrl: './order.html',
  styleUrl: './order.scss'
})
export class Order implements OnInit {
  constructor(private spinner: NgxSpinnerService){

  }

  ngOnInit(): void {
      this.spinner.show();

      setTimeout(() => {
        this.spinner.hide();
      }, 5000);
  }
}

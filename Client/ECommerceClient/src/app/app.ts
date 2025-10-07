import { Component, signal } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CustomToastr, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr';
declare var $: any

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ECommerceClient');

  constructor(private toastr: CustomToastr){
    toastr.message("Merhaba", "Firat", {messageType: ToastrMessageType.Success, position: ToastrPosition.TopLeft});
  }
}

$(document).ready(() => {
  alert("asd")
})

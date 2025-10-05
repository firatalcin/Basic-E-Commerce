import { Component, signal } from '@angular/core';
declare var $: any

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ECommerceClient');
}

$(document).ready(() => {
  alert("asd")
})

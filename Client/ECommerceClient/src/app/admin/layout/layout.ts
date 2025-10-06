import { Component, OnInit } from '@angular/core';
import { Alertify, MessageType, Position } from '../../services/admin/alertify';


@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout implements OnInit{

  constructor(private alertify: Alertify){}

  ngOnInit(): void {
    this.alertify.message("Merhaba", MessageType.Notify, Position.TopLeft, 5);
  }
}

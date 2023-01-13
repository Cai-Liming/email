import { Component, HostBinding, Input, OnInit } from '@angular/core';
import {Email} from 'src/app/sent-email/sent-email.models'

@Component({
  selector: 'app-sent-email',
  templateUrl: './sent-email.component.html',
  styleUrls: ['./sent-email.component.css']
})
export class SentEmailComponent implements OnInit {
  @Input() email : Email = null!;
  show = false
  constructor(){}

  ngOnInit(): void {
    
  }
}

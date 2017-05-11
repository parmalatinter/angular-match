import { Component } from '@angular/core';
import { MessageService } from './message.service';

@Component({
  providers: [MessageService],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private service: MessageService) { }
  message: string;
  title = 'app works!';
  ngOnInit() {
    this.message = this.service.getMessage();
  }
}

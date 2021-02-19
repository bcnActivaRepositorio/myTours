import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[] = [];

  constructor() { }

  // fill array messages
  addMe(message: string): void {
    this.messages.push(message);
  }

  // clear array
  clearMe(): void{

    this.messages = [];
  }
}

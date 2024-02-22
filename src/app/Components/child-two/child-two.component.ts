import { Component, EventEmitter, Input, Output } from '@angular/core';
import { copyFileSync } from 'node:fs';

@Component({
  selector: 'app-child-two',
  standalone: true,
  imports: [],
  templateUrl: './child-two.component.html',
  styleUrl: './child-two.component.css',
  // inputs: ['parentData'], // receiving data from parent to child
  // outputs: ['childEvent'] // sending data from child to parent
})
export class ChildTwoComponent {
  //--> @Input and @Output used instead of metadata properties.
  @Input() parentData: any; // parentData
  @Input() num1: any = 0;
  @Input() num2: any = 0;

  result: number = 0;

  // switch 
  change = 1;

  add() {
    this.result = Number(this.num1) + Number(this.num2);
  }
  // sending data from child to parent
  @Output() childEvent = new EventEmitter();
  sendData(data: any) {
    this.childEvent.emit(data);
  }

}

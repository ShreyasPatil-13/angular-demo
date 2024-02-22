import { Component } from '@angular/core';
import { ChildTwoComponent } from '../child-two/child-two.component';

@Component({
  selector: 'app-child-one',
  standalone: true,
  imports: [ChildTwoComponent],
  templateUrl: './child-one.component.html',
  styleUrl: './child-one.component.css',
  outputs: ['childData']
})
export class ChildOneComponent {

  childData: any;
  getData(data: any) {
    this.childData = data;
  }
}

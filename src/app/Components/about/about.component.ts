import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {


  student = {
    name: '',
    rollNumber: 0,
    percentage: 0,
  }

  courses = [
    { name: 'abc', marks: 132 },
    { name: 'def', marks: 178 },
    { name: 'ghi', marks: 197 },
    { name: 'jkl', marks: 153 },
  ]


}

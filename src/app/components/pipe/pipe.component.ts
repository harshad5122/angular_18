import { DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe, JsonPipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
  a: string = 'Billi';
  b: string = 'title case pipe';
  c: Date = new Date();
  d: any = {
    'firstName': 'Harshad',
    'lastName': 'Patoliya',
    'age': '23'
  }
}

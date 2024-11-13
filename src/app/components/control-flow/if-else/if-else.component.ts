import { Component } from '@angular/core';

@Component({
  selector: 'app-if-else',
  standalone: true,
  imports: [],
  templateUrl: './if-else.component.html',
  styleUrl: './if-else.component.css'
})
export class IfElseComponent {

  ifVariable: string = 'hh';

  ifElseVaiavble: string = 'dd';

  forLoopArray: string[] = ['Element 1', 'Element 2', 'Element 3', 'Element 4'];

  date: string = '5';
}

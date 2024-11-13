import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute-dir',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './attribute-dir.component.html',
  styleUrl: './attribute-dir.component.css'
})
export class AttributeDirComponent {

  div1BGColor: string = 'bg-primary';

  addRedColor() {
    this.div1BGColor = 'bg-danger'
  }
  addBlueColor() {
    this.div1BGColor = 'bg-primary'
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-dir',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './structural-dir.component.html',
  styleUrl: './structural-dir.component.css'
})
export class StructuralDirComponent {

  isDiv1Visible: boolean = true;
  isDiv2Visible: boolean = true;
  num1: string = '';
  num2: string = '';
  selectedValue: string = 'USA';
  isChecked: boolean = true;

  cityArray: string[] = ['Rajkot', 'Junagadh', 'Jamnager', 'Bhavnager']

  employeeList: any[] = [
    { eId: 1, eName: 'A1', eAge: 20, isActive: false },
    { eId: 2, eName: 'A2', eAge: 21, isActive: true },
    { eId: 3, eName: 'A3', eAge: 22, isActive: false },
    { eId: 4, eName: 'A4', eAge: 23, isActive: false },
    { eId: 5, eName: 'A5', eAge: 24, isActive: true },
  ]

  onHideBtnClick() {
    this.isDiv1Visible = false
  }

  onShowBtnClick() {
    this.isDiv1Visible = true
  }

  onToggleBtnClick() {
    this.isDiv2Visible = !this.isDiv2Visible
  }

}

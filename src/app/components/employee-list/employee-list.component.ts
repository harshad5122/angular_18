import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [],
  template: '<h2 class="testClass font-20">This is Employee List component</h2>',
  styles: ['.testClass{color:red}']
})
export class EmployeeListComponent {

}

import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  firstName: string = 'Angular';
  age: number = 24;
  male: boolean = true;

  // Define the signal for lastName
  lastName = signal('Patoliya');

  changeFirstName() {
    this.firstName = 'Harshadddddd';
    this.lastName.set('patoliyaaaaaaaa');  // Updates the signal value
  }

  // Manually update the lastName signal when input changes
  onLastNameChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.lastName.set(input.value);
  }

   // Manually update the firstName input changes
  onFirstNameChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.firstName = input.value;
  }
}

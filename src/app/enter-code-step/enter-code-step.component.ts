import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-enter-code-step',
  templateUrl: './enter-code-step.component.html',
  styleUrls: ['./enter-code-step.component.css']
})
export class EnterCodeStepComponent implements OnInit {
  @Input() secondFormGroup!: FormGroup;
  deviceTokenGenerating = false;
  pairComplete = false;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log('on submit called');
    this.deviceTokenGenerating = true;
    setTimeout(() => {
      this.deviceTokenGenerating = false;
      this.pairComplete = true;
    }, 1000)

  }

}

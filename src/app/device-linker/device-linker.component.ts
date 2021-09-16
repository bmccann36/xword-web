import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'device-linker',
  templateUrl: 'device-linker.component.html',
  styleUrls: ['device-linker.component.css'],
})
export class DeviceLinkerComponent implements OnInit {
  title = 'newMat';
  isLinear = true;
  secondFormGroup!: FormGroup;
  deviceTokenGenerating = false;
  pairComplete = false;
  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.secondFormGroup = this._formBuilder.group({
      oneTimeCode: ['', Validators.required],
    });
  }
  onChanges(): void {

  }

  onSubmit() {
    this.deviceTokenGenerating = true;
    setTimeout(() => {
      this.deviceTokenGenerating = false;
      this.pairComplete = true;
    }, 1000)

  }

  goToLink(url: string) {
    window.open(url, "_blank");
  }
}

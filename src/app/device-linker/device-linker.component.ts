import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'device-linker',
  templateUrl: 'device-linker.component.html',
  styleUrls: ['device-linker.component.css'],
})
export class DeviceLinkerComponent implements OnInit {
  title = 'newMat';
  isLinear = true;
  // firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    // this.firstFormGroup = this._formBuilder.group({
    //   name: ['', Validators.required],
    //   description: ['', Validators.required]
    // });

    this.secondFormGroup = this._formBuilder.group({
      amount: ['', Validators.required],
      stock: ['', Validators.required]
    });

  }

  submit() {
    // console.log(this.firstFormGroup.value);
    console.log(this.secondFormGroup.value);
  }

  goToLink(url: string) {
    window.open(url, "_blank");
  }
}

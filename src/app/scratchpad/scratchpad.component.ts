import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scratchpad',
  templateUrl: './scratchpad.component.html',
  styleUrls: ['./scratchpad.component.css']
})
export class ScratchpadComponent implements OnInit {
  filesCreating = true;
  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick() {
    console.log('on button click called');
  }

}

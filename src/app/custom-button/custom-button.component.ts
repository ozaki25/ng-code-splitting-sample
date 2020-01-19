import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  template: `
    <button>
      custom-button
    </button>
  `,
  styles: [],
})
export class CustomButtonComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

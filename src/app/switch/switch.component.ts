import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {
  @Input() disabled: boolean ;

  isDisabled  = true;
  color = 'warn';

  constructor() { }

  ngOnInit() {
  }

}

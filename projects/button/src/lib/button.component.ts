import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'fih-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FihButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

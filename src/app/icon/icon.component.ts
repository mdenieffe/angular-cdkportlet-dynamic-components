import {Component, Input, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit, OnDestroy {

  @Input() iconName: string;

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    console.log(`destroying component`);
  }

}

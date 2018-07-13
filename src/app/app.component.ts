import {Component, OnInit} from '@angular/core';
import {OverlayService} from './overlay/overlay.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {

  constructor(private overlayService: OverlayService) {

  }

  ngOnInit() {

  }

  performAction() {
    this.overlayService.open();
  }

}

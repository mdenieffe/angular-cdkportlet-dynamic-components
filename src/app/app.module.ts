import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {OverlayModule} from '@angular/cdk/overlay';
import {A11yModule} from '@angular/cdk/a11y';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatIconModule, MatListModule, MatToolbarModule} from '@angular/material';
import {AppStateService} from './app-state.service';
import {OverlayService} from './overlay/overlay.service';
import { IconComponent } from './icon/icon.component';
import { ComponentHostDirective } from './utils/component-host.directive';
import { OverlayContainerComponent } from './overlay/overlay-container/overlay-container.component';

@NgModule({
  declarations: [
    AppComponent,
    IconComponent,
    ComponentHostDirective,
    OverlayContainerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    OverlayModule,
    A11yModule,
    CommonModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [AppStateService, OverlayService],
  bootstrap: [AppComponent],
  entryComponents: [IconComponent, OverlayContainerComponent]
})
export class AppModule { }

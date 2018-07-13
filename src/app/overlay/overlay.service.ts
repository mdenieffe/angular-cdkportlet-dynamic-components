import {Injectable} from '@angular/core';
import {Overlay} from '@angular/cdk/overlay';
import {ComponentPortal} from '@angular/cdk/portal';
import {OverlayContainerComponent} from './overlay-container/overlay-container.component';

@Injectable()
export class OverlayService {

  constructor(private overlay: Overlay) {
    console.log(`OverlayService: constructor`);
  }

  open() {
    console.log(`open overlay...`);
    const overlayRef = this.overlay.create(this.getOverlayConfig());

    const overlayPortal = new ComponentPortal(OverlayContainerComponent);

    overlayRef.attach(overlayPortal);

    overlayRef.backdropClick().subscribe(() => overlayRef.dispose());

    return overlayRef;
  }

  private getOverlayConfig() {
    console.log(`create overlayConfig...`);
    const positionStrategy = this.overlay.position()
                                          .global()
                                          .centerVertically()
                                          .centerHorizontally();
    const config = {
      hasBackdrop: true,
      backdropClass: 'bs-backdrop',
      panelClass: 'bs-overlay-panel',
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy
    };

    return config;
  }

}

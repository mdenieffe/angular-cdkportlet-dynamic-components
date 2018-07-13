import {Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ComponentHostDirective} from '../../utils/component-host.directive';
import {IconComponent} from '../../icon/icon.component';
import {AppState, AppStateService, State} from '../../app-state.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-overlay-container',
  templateUrl: './overlay-container.component.html',
  styleUrls: ['./overlay-container.component.scss']
})
export class OverlayContainerComponent implements OnInit, OnDestroy {

  private static STATE_COMPONENT_MAP = new Map<State, string>();

  @ViewChild(ComponentHostDirective) componentHost: ComponentHostDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private stateService: AppStateService) {
    console.log(`OverlayContainerComponent constructor`);

    OverlayContainerComponent.STATE_COMPONENT_MAP.set(State.DISPLAY_DETAILS, 'visibility');
    OverlayContainerComponent.STATE_COMPONENT_MAP.set(State.LIMBO, 'autorenew');
    OverlayContainerComponent.STATE_COMPONENT_MAP.set(State.SUCCESS, 'check_circle');
    OverlayContainerComponent.STATE_COMPONENT_MAP.set(State.PROCESSING_FORM, 'cached');
  }

  ngOnInit() {
    console.log(`OverlayContainerComponent init`);

    this.stateService.state$
      .pipe(map(s => OverlayContainerComponent.STATE_COMPONENT_MAP.get(s.state))).subscribe((icon) => {
      this.loadComponent(icon);
    });
  }

  ngOnDestroy(): void {
    console.log(`OverlayContainerComponent destroyed...`);
  }

  loadComponent(icon: string) {
    console.log(`loadComponent...`);
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(IconComponent);


    const viewContainerRef = this.componentHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<IconComponent>componentRef.instance).iconName = icon;
  }

}

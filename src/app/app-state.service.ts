import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {interval} from 'rxjs/observable/interval';
import {map, tap, takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs/Subject';

export enum State {
  DISPLAY_FORM,
  PROCESSING_FORM,
  SUCCESS,
  DISPLAY_DETAILS,
  LIMBO
}

export interface AppState {
  state: State;
}

@Injectable()
export class AppStateService {

  private destroy = new Subject();

  private states = [
    {state: State.DISPLAY_DETAILS},
    {state: State.DISPLAY_FORM},
    {state: State.PROCESSING_FORM},
    {state: State.SUCCESS},
    {state: State.LIMBO}
  ];

  private stateSubject = new BehaviorSubject<AppState>({state: State.LIMBO});

  state$ = this.stateSubject.asObservable();

  constructor() {
    this.start();

    setTimeout(() => this.destroy.next(null), 10000);
  }

  private start() {

    interval(3000)
      .pipe(
        takeUntil(this.destroy),
        map(val => this.states[val % this.states.length]))
      .subscribe(state => this.stateSubject.next(state), () => {}, () => console.log('completed'));
  }

  private stop() {

  }

}

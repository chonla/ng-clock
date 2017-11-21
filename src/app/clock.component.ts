import { Component, OnInit, OnDestroy } from '@angular/core';
import { TimerObservable } from 'rxjs/observable/TimerObservable';

@Component({
  selector: 'clock',
  templateUrl: './clock.component.html'
})

export class ClockComponent implements OnInit, OnDestroy {
  private t: any;
  private tsub: any;

  constructor() {}

  ngOnInit() {
    this.tsub = TimerObservable.create(0, 1000).subscribe(() => this.refresh());
  }

  refresh() {
    this.t = new Date();
  }

  now() {
    return this.t;
  }

  public ngOnDestroy(): void {
    this.tsub.unsubscribe();
  }
}

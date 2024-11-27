import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GenericErr } from './shared/models/GenericErr';
import { UpdateService } from './shared/services/update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  errorSubscription: Subscription = Subscription.EMPTY;
  error: GenericErr = new GenericErr();
  title = 'bookmarker';

  constructor(private updateService: UpdateService) {}

  ngOnInit(): void {
    this.errorSubscription = this.updateService.currentError.subscribe(
      (response) => {
        this.error = response;
      }
    );
  }
  ngOnDestroy(): void {
    this.errorSubscription.unsubscribe();
  }
}

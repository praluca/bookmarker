import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { UpdateService } from '../../services/update.service';
import { Subscription } from 'rxjs';
import { GenericErr } from '../../models/GenericErr';

@Component({
  selector: 'app-generic-error',
  templateUrl: './generic-error.component.html',
  styleUrls: ['./generic-error.component.scss'],
})
export class GenericErrorComponent {
  @Input() error: GenericErr = new GenericErr();
  constructor(private updateService: UpdateService) {}

  onCloseError() {
    this.updateService.updateError({});
  }
}

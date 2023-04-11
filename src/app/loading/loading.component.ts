import { Component } from '@angular/core';
import { LoaderService } from '../core/services/loader.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent {
  constructor(public loader: LoaderService) { }

}

import { Component } from '@angular/core';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {
    showLoader = false;
    constructor(private loader: LoaderService) {
      this.loader.loader$?.subscribe( b => this.showLoader = b);
    }
}

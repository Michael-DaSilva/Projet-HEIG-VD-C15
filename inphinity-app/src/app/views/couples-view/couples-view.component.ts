import {Component, OnInit} from '@angular/core';
import {Couple} from '../../models/couple';
import {APIDatasService} from '../../services/apidatas.service';

@Component({
  selector: 'app-couples-view',
  templateUrl: './couples-view.component.html',
  styleUrls: ['./couples-view.component.scss']
})
export class CouplesViewComponent implements OnInit {
  data: Couple[] = [];

  constructor(private api: APIDatasService) {
  }

  ngOnInit() {
    this.fetchDataCouple();
  }

  fetchDataCouple() {
    const Res = this.api.getDatas('/couple/');
    Res.subscribe(
      res => {
        this.data = res as Couple[];
      },
      error => {
        console.log('Error getting couples');
        console.log(error);
      },
      () => {
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
import {MasterService} from '../../service/master.service';
@Component({
  selector: 'ngx-client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.scss'],
})
export class ClientViewComponent implements OnInit {

  constructor(private route: ActivatedRoute, private masterService: MasterService, private router: Router) { }
  id = '';
  li: any;
  lis = [];

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getFullDetails();
  }

  getFullDetails() {
    this.masterService.getFullDetails(this.id).subscribe(
      (response => {
        console.log(response);
        this.li = response['result'];
        console.log(this.li)
        this.lis = this.li;
      }) ,
    );
  }

}

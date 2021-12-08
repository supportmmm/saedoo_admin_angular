import {Component} from '@angular/core';
import {Router} from "@angular/router"
@Component({
  selector: 'ngx-confirm-viewmore-button',
  templateUrl: './confirm-viewmore-button.component.html',
  styleUrls: ['./confirm-viewmore-button.component.scss']
})
export class ConfirmViewmoreButtonComponent {
  params: any;

  constructor(private router: Router) {
  }

  agInit(params: any) {
    this.params = params;
  }

  onCLickButton(): void {
    console.log(this.params);

    window.location.href="/pages/client-view/" + this.params.value;
    console.log(this.params.value);
    //router.link('/client-view');
    //this.router.navigate('/client-view');
   // this.router.navigate(['/client-view']);
   // this.router.navigate(['client-view/' + this.params.value]);
    //window.location = '/ClientView';
  }
}

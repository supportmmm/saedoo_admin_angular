import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { ConfirmedComponent } from './confirmed/confirmed.component';
import { DataTablesModule } from 'angular-datatables';
import { ClientViewComponent } from './client-view/client-view.component';

import { DialogService } from '../service/dialog.service';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { AgGridModule } from 'ag-grid-angular';
import { ConfirmViewmoreButtonComponent } from './confirmed/confirm-viewmore-button/confirm-viewmore-button.component';
import { NbButtonModule, NbCardModule } from '@nebular/theme';
import { ProgressComponent } from './progress/progress.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    DataTablesModule,
    DialogModule,
    AgGridModule.withComponents([
        ConfirmViewmoreButtonComponent
    ]),
    NbCardModule,
  ],
  declarations: [
    PagesComponent,
    ConfirmedComponent,
    ClientViewComponent,
    ConfirmViewmoreButtonComponent,
    ProgressComponent,
  ],
  providers: [DialogService],
})
export class PagesModule {
}

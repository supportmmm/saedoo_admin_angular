import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {MasterService} from '../../service/master.service';
import {DialogService} from '../../service/dialog.service';
import {Grid} from 'ag-grid-community';
import {ColDef} from 'ag-grid-community';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import {ConfirmViewmoreButtonComponent} from './confirm-viewmore-button/confirm-viewmore-button.component';
import {AgGridAngular} from 'ag-grid-angular';
import { Observable } from 'rxjs';
@Component({
  selector: 'ngx-confirmed',
  templateUrl: './confirmed.component.html',
  styleUrls: ['./confirmed.component.scss'],
})
export class ConfirmedComponent implements OnInit {
  @ViewChild('agGrid') agGrid!: AgGridAngular;

  constructor(private masterService: MasterService, private dialogService: DialogService) {
  }

  isChecked = 0;
  detailsId = '';
  @ViewChild('dialog') dialog: ElementRef;


  ngOnInit(): void {
    this.getAllConfirmedList();
  }


  getAllConfirmedList() {
    this.masterService.getAllConfirmedList().subscribe(
      (response => {
        this.rowData = response['result'];
        console.table(response['result']);
        // this.lis = this.li;
      }),
    );
  }


  showBtnClick() {
    this.dialogService.showDialog(this.dialog.nativeElement, {
      content: 'Are you sure you want to change the status of these items ?',
      header: 'Change Status Multiple Items',
      buttons: [{click: this.hideYesBtnClick.bind(this), buttonModel: {content: 'Yes', isPrimary: true}}
        , {click: this.hideBtnClick.bind(this), buttonModel: {content: 'No'}}]
    });
  }

  hideBtnClick(e) {
   // this.isChecked = evt.target.unchecked;
    this.dialogService.hideDialog();
  }

  hideYesBtnClick(e) {
    let detailsData = this.detailsId.split(',')
    alert(detailsData);
    if(Number(detailsData) <= 0){ alert("select atleast on row to chnage the status")}
    else {
      for (let entry of detailsData) {
        this.masterService.updateStatus(entry, '2').subscribe(
          (response => {
            this.getAllConfirmedList();
          }),
        );
      }
    }
    this.dialogService.hideDialog();
  }

  columnDefs: ColDef[] = [
    // { field: 'id', headerName: 'Index', cellRendererFramework: ConfirmViewmoreButtonComponent},, checkboxSelection: true
    {field: 'BookingId', headerName: 'BookingId', checkboxSelection: true, width: 120 },
    {field: 'Date', headerName: 'Date', width: 120 },
    {field: 'TimeSlot', headerName: 'Time Slot', width: 120 },
    {field: 'ServiceName', headerName: 'Service Name', width: 150},
    {field: 'ClientName', headerName: 'Client Name', width: 150},
    {field: 'ClientEmail', headerName: 'ClientEmail', width: 150},
    {field: 'ClientMobile', headerName: 'Client Mobile', width: 150},
    {field: 'id', headerName: '', width: 150, cellRendererFramework: ConfirmViewmoreButtonComponent },
  ];

  rowData: Observable<any[]>;

  getSelectedRows() {

  let selectedNodes = this.agGrid.api.getSelectedNodes();
    let selectedData = selectedNodes.map(node => node.data);
    const selectedDataStringPresentation = selectedData.map(node => `${node.id}`).join(', ');
    this.detailsId = selectedDataStringPresentation;
    this.showBtnClick();
    return selectedData;
  }

}



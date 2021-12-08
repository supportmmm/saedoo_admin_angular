import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {URLConstants} from '../helpers/URLConstants';

@Injectable({
  providedIn: 'root'
})
export class MasterService {


  constructor(private _http: HttpClient) {
  }


    public getAllConfirmedList() {
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'api-key': URLConstants.API_KEY ,
             });
        let options = { headers: headers };
        const postData = {
        };
        console.log(URLConstants.getAllConfirmedList);
        console.log(JSON.stringify(options));
        return this._http.post(URLConstants.getAllConfirmedList, postData, options);
    }


  public getFullDetails( details_id: string) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'api-key': URLConstants.API_KEY ,
    });
    let options = { headers: headers };
    const postData = {DetailsId: details_id};
    console.log(JSON.stringify(options));
    return this._http.post(URLConstants.getFullDetails, postData, options);
  }



  public updateStatus( details_id: string, status_id: string ) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'api-key': URLConstants.API_KEY ,
    });
    let options = { headers: headers };
    const postData = {DetailsId: details_id, StatusId: status_id};
    console.log(JSON.stringify(options));
    return this._http.post(URLConstants.updateStatus, postData, options);
  }
}

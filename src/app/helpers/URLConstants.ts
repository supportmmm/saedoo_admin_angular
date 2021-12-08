import {environment} from '../../environments/environment';

export class URLConstants {
    /*  local server */

    public static API_KEY = 'v-LjoV_9q5CJ-jfHdHyC_TzC9I8wlUooCQqgTPWasbO4z4cuDslDmjz6lWMayGCxgPw';
    public static SERVER = environment.SERVER;
    public static getAllConfirmedList = URLConstants.SERVER.concat('get_adm_booking_details_confirmed');
  public static getFullDetails = URLConstants.SERVER.concat('get_adm_booking_full_details');
  public static updateStatus = URLConstants.SERVER.concat('get_adm_booking_update_status');

}

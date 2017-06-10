import { environment } from '../../environments/environment';

export class Config {
    static BaseUrl = environment.production ? "https://care360-api.herokuapp.com/api/v1/":"http://localhost:5000/api/v1/";
    static token = "";
    static current_user: any = {username: 'Username'};
    static toastr;
}
import { environment } from '../../environments/environment';

export class Config {
    static BaseUrl = environment.production ? "":"http://localhost:5000/api/v1/";
    static token = "";
    static current_user: any;
}
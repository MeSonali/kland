import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  private apiUrl = 'https://dev.myemprove.com/api/ver3api/student-login?lang=en&store=KW';

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    const body = {
      email: "test@yopmail.com",
      password: "123456",
      phone_code: "98563214",   
      device_type: "W",
      device_token: "",
      device_model: "",
      app_version: "",
      os_version: ""
    };

   

    return this.http.post<any>(this.apiUrl, body);
  }
}

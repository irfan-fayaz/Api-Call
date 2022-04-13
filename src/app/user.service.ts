import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
providedIn: 'root'
})
export class userService {
constructor(private http:HttpClient){}
getGender():Observable<any>{
 return this.http.get('https://api.genderize.io?name=peter')
}
getAge():Observable<any>{
 return this.http.get('https://api.agify.io?name=michael')
}
getNational():Observable<any>{
 return this.http.get('https://api.nationalize.io?name=michael')
}
}

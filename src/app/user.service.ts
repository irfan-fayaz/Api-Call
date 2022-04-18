import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
providedIn: 'root'
})
export class userService {
constructor(private http:HttpClient){}
getGender(name:any):Observable<any>{
 return this.http.get('https://api.genderize.io?name='+name)
}
getAge(age:any):Observable<any>{
 return this.http.get('https://api.agify.io?name='+age)
}
getNational(name:any):Observable<any>{
 return this.http.get('https://api.nationalize.io?name='+name)
}
}

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { userService } from './user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'task-first';
  toggleButton: boolean = true;
  myForm = new FormGroup({
    name: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    national: new FormControl('', Validators.required),
  });
  constructor(private services: userService) {}
  ngOnInit() {}
  userData: any = {};
  person: any;
  user1: any = [];
  user2: any = [];
  user3: any = [];

  getData() {
    this.userData = this.myForm.value;
    this.person = this.userData.name;
    if (this.userData.gender === true) {
      this.services.getGender(this.userData.name).subscribe((post1) => {
        this.user1.push(post1.name, post1.gender, post1.probability);
        console.log(this.user1)
      });
      
    }
    if (this.userData.age === true) {
      this.services.getAge(this.userData.name).subscribe((post2) => {
        console.log(post2.age);
        this.user2.push(post2.age);
      });
    }
    if (this.userData.national === true) {
      this.services.getNational(this.userData.name).subscribe((post3) => {
        console.log(post3.country);
        if(post3.country.length===0){
          console.log("Country not available")
          this.user3.push("Country name not available")
        }
        else{
        this.user3.push(
          post3.country[0].country_id,
          post3.country[0].probability
        )};
      });
    }
  }

  checkValid(event: any) {
    if (event.checked) {
      this.toggleButton = false;
    } else if (!event.checked) {
      this.toggleButton = true;
    } else {
      this.toggleButton = true;
    }
  }
}

function displayGender() {
  throw new Error('Function not implemented.');
}

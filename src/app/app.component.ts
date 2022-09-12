import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('f') signUpForm!: NgForm;

  user={
    firstname:'',
    lastname:'',
    age:'',
    phone:'',
  }

  suggestedUserName(){
    const suggestedUserName='Superuser'
    this.signUpForm.form.patchValue({
      userData:{
        firstname:'',
        lastname:'',
        age:'',
        phone:''

      }
    })
  }
  
  // onSubmit(form: NgForm) {
  //   // console.log(form);
  //   console.log(form.value);
  // }
  onSubmit(){
this.user.firstname=this.signUpForm.value.userData.firstname;
this.user.lastname=this.signUpForm.value.userData.lastname;
this.user.age=this.signUpForm.value.userData.age;
this.user.phone=this.signUpForm.value.userData.phone;

this.signUpForm.reset();
  }
 
}

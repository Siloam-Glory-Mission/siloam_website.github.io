import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { AuthService } from '../core/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public show_log_error=''; 
  logdata: FormGroup; 

  constructor(private fb: FormBuilder,private router: Router,private authservice:AuthService,private http:HttpClient,private toastr: ToastrService) {

    this.logdata = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });

  }
  onLogin() {
    // console.log(this.logdata.value)
    let username = this.logdata.value.username;
    let password = this.logdata.value.password;

    var obj = {
      "username": username,
      "password": password,
      
    };
    
    
    
   // localStorage.setItem('userdetails',)
    this.authservice.login(obj).subscribe((data) => {
     // console.log(data);
      
      localStorage.setItem('logindetails',JSON.stringify(obj.username))
      this.toastr.success('Welcome',obj.username)
      //this.router.navigate(['/dashboard']);
      this.router.navigate(['/dashboard']);
    });
   
  }
  
  clearfunction(){
    this.show_log_error = '';  
  }
 
  

}
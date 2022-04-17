import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userLoginArray: any = new Array()
  loginUserData: any = new Array()
  credentialdata:any
 // csvUploadTime: any;
  userLogin: any;
  constructor(private formBuilder: FormBuilder,private router: Router,private http:LoginService) { }
  registerForm:any =  FormGroup;
  submitted = false;

  //Add user form actions
  get f() { return this.registerForm.controls; }
  onSubmit() {

    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    //True if all the fields are filled
    if(this.submitted)
    {
      this.userLogin='';
      this.http.getUserData().subscribe((data)=>{

        console.log(this.registerForm['value'])
      this.userLoginArray=data;
      this.userLoginArray.forEach((y:any) =>
      {
        if(y['UserName']==this.registerForm['value']['usename'] && y['Password']==this.registerForm['value']['password'])
        {
            var finalObj = Object.assign({"UserName":y['UserName']}, {"Password": y['Password']},{"StateCode": y['StateCode']},{"StateName": y['StateName']},{"role": y['role']},{"DefaultState": y['DefaultState']});
            this.loginUserData.push(finalObj)
            this.userLogin='Success';
            this.credentialdata='';
            localStorage.setItem('SeesionUser',y['role'])
            localStorage.setItem('userName',y['UserName'])
            localStorage.setItem('stateCode',y['StateCode'])
            localStorage.setItem('stateName',y['StateName'])
            localStorage.setItem('role',y['role'])
            localStorage.setItem('defaultState',y['DefaultState'])
            sessionStorage.setItem('defaultStates', y['DefaultState']);
          //  this.csvUploadTimeGet();
          this.router.navigateByUrl("/dashboard");
        }
        else if(this.userLogin!='Success'){
          debugger
          this.credentialdata="The username or password you entered isn't correct."
        }
      });
    });



    }

  }
// csvUploadTimeGet()
// {
//   this.http.getCsvUploadDate().subscribe((data)=>{
//     this.csvUploadTime=data;
//     console.log("csv upload time")
//     console.log(this.csvUploadTime)
//     sessionStorage.setItem('csvUploadTime',this.csvUploadTime[0]['date']);
//     this.router.navigateByUrl("/dashboard");
//     });
// }
    //login form
    ngOnInit(): void {
      //login form
     //Add User form validations
     this.registerForm = this.formBuilder.group({
      usename: ['', [Validators.required]],
      password: ['', [Validators.required]],
      });
    }


}

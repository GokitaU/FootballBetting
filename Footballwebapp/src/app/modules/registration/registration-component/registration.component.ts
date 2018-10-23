import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { RegistrationService } from 'src/app/services/registration.service';
import { User } from 'src/app/models/user.model';
import { PasswordValidation } from 'src/app/tools/MatchPassword.validator';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
    registrationForm: FormGroup;
    regUser: User = new User();

    constructor(public fb: FormBuilder, private regservice: RegistrationService) {
        this.registrationForm = fb.group({
            email: ['', [Validators.required, Validators.email, Validators.pattern("[^ @]*@[^ @]*")]],
            username: ['', Validators.required],
            password: ['', Validators.required],
            confirmpassword: ['', Validators.required]
            }, {
                validator: PasswordValidation.MatchPassword
            });
    }

    ngOnInit() {

    }

    registration() {
        this.regUser.email = this.registrationForm.value.email;
        this.regUser.username = this.registrationForm.value.username;
        this.regUser.password = this.registrationForm.value.password;

        this.regservice.register(this.regUser).subscribe(
            (x: any) => {
                console.log("OK");
            },
            (err: any) => {
                console.log("HIBA");
            }
        )
    }

}
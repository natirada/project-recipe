import { NgModule } from '@angular/core';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthRouteringModule } from './auth-routering.module';


@NgModule({
    declarations:[
        SigninComponent,
        SignupComponent
    ],
    imports: [ FormsModule , CommonModule , AuthRouteringModule]
})
export class AuthModule {}
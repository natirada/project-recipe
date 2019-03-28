import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    token: string;

    constructor (private route: Router) {}
    singupUser(email: string, password: string) {
        firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password)
        .catch(
            error => console.log(error)
        );
    }

    signinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password).
        then(
            response => {
                firebase.auth().currentUser.getIdToken().
                then(
                    (token: string ) =>  {
                        this.token = token;
                        this.route.navigate(['/']);
                    }
                );
            }
        ).catch(
            error => console.log(error)
        );
    }

    getToken() {
        firebase.auth().currentUser.getIdToken().then(
            (token: string ) => this.token = token
        );

        return this.token;
    }

    logoutUser() {
        firebase.auth().signOut();
        this.token = null;
    }
    isAuthenticated(): boolean {
        return this.token != null;
    }
}
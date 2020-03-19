import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ServicioDeAutentService {

  authUser = null;

  constructor(public miauth: AngularFireAuth) { }
  user = this.miauth.authState;
  login() {
    console.log('login!');
  }
  glogin() {
    console.log('google login!');
    this.miauth.auth.signInWithPopup( new auth.GoogleAuthProvider() )
      .then( user => {
        console.log('user logueado: ', user);
        this.authUser = user.user;
      })
      .catch( error => {
        console.log('error en google login: ', error);
      });
  }
  gitlogin() {
    console.log('Git login!');
    this.miauth.auth.signInWithPopup( new auth.GithubAuthProvider() )
      .then( user => {
        console.log('user logueado: ', user);
        this.authUser = user.user;
      })
      .catch( error => {
        console.log('error en git login: ', error);
      });
  }
  logout() {
    console.log('logout!');
    this.miauth.auth.signOut();
  }
}

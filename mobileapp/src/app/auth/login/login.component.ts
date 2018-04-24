import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {AuthService} from "../service/auth.service";
import {MatSnackBar} from "@angular/material";
import Api from "../../service/api.util";
import {isNullOrUndefined} from "util";


@Component({
  selector: 'app-login',
  moduleId: module.id,
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})

export class LoginComponent implements OnInit {

  loading = false;
  error = '';
  message = "";
  token = null;

  public googleAuthUrl = Api.BASE_URL+'/oauth2/authorization/google';

  constructor(
    private router: Router,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
  ) {
    this.route.queryParams.subscribe(params => this.populate(params));
  }

  populate(params: Params){
    if(params['token']) this.token = params['token'];
  }

  ngOnInit() {
    if(this.message.length>0) this.snackBar.open(this.message);

    if(!isNullOrUndefined(this.token)) this.login();
    else this.logout();
  }


  googleLogin(){
    window.location.href = this.googleAuthUrl;
  }


  login() {
    this.authService.saveToken(this.token);
    this.router.navigate(["home"]);
  }

  logout() {
    this.authService.removeToken();
  }
}

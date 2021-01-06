import { Component, OnInit } from '@angular/core';
import { StrapiService } from 'src/app/service/strapi.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  username:string = '';
  email:string= '';
  password:string='';

  get users() {
    return this.strapiService.userlist
  }

  constructor(
    private strapiService : StrapiService
  ) { }

  ngOnInit(): void {
  }

  onChangeUsername(event) {
    this.username = event.target.value
  }
  onChangeEmail(event) {
    this.email = event.target.value
  }
  onChangePassword(event) {
    this.password = event.target.value
  }

  register() {
    this.strapiService.register(
      this.username,
      this.email,
      this.password
    )
  }
}

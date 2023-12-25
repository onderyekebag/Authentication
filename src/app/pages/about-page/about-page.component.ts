import { Component } from '@angular/core';

@Component({
  selector: 'app-about-page',
  template: `
    <div class="cotainer mt-4 text-center">
      <h1>Angular</h1>
      <hr />
      <h3>NGXS State Management</h3>
      <h4><span>Authorization & Authentication</span></h4>
      <h5>Guards</h5>
      <h3>Interceptor</h3>
  <hr>
      <p>
        In Angular, the authentication process, user data retrieval, login
        functionality, token usage, and redirection to the login page when
        attempting to access the profile page without authentication have been
        implemented using Ngxs, Interceptors, and Guards to ensure proper user
        access control.
        
      </p>
      <b>
        <p>
        Try accessing the URL with <a routerLink="/profile">'profile'</a>. <br>
        <a routerLink="/contact">Get in touch with me</a> to try using a username and password.
        </p>
      </b>
    </div>
  `,
})
export class AboutPageComponent {}

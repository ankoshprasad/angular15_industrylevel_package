import { Component, OnInit } from '@angular/core';  
import { Router } from '@angular/router';  
import { AuthenticationService } from '../../service/authentication.service';  

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  constructor(private router: Router, private authenticationService: AuthenticationService) { } 
  ngOnInit() {  
  } 
  logout() {  
    this.authenticationService.logout();  
    this.router.navigate(['']);  
  }  
}

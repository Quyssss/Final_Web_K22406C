import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-dangki',
  standalone: true,
  imports: [FormsModule, RouterModule, NgOptimizedImage],
  templateUrl: './dangki.component.html',
  styleUrls: ['./dangki.component.scss'] // Sửa thành styleUrls
})
export class DangkiComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  successMessage: string | null = null;

  constructor(private router: Router,private http: HttpClient) {}
  ngOnInit(): void
  {
  }
  onSubmit() 
  {
    let bodyData = 
    {
      "firstname" : this.firstName,
      "lastname" : this.lastName,
      "email" : this.email,
      "password" : this.password,
    };
    this.http.post("http://localhost:8088/user/create",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("User Registered Successfully")
    });
    } 
    
  save()
  {
    this.onSubmit();
  }

  }

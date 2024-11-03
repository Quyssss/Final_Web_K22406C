import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dangnhap',
  standalone: true,
  imports: [FormsModule, RouterModule, NgOptimizedImage],
  templateUrl: './dangnhap.component.html',
  styleUrls: ['./dangnhap.component.scss']
})
export class DangnhapComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = ""; 

  constructor(private router: Router, private http: HttpClient) {}

  onSubmit() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  
    let bodyData = {
      email: this.email,
      password: this.password,
    };
  
    this.http.post("http://localhost:8088/user/login", bodyData).subscribe(
      (resultData: any) => {
        console.log(resultData);
        if (resultData.status) {
          alert("Đăng nhập thành công"); // Hiển thị thông báo lỗi
          this.router.navigateByUrl('/');
        } else {
          console.log("Error login");
        }
      },
      error => {
        this.errorMessage = "Đăng nhập không thành công"; // Thông báo khi có lỗi
        alert(this.errorMessage); // Hiển thị thông báo lỗi
        console.error("HTTP Error:", error);
      }
    );
  }
}
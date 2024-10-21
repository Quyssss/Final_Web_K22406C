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
  errorMessage: string = ""; // Sửa chính tả từ 'erroMessage' thành 'errorMessage'

  constructor(private router: Router, private http: HttpClient) {}

  onSubmit() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);

    const bodyData = {
      email: this.email,
      password: this.password,
    };

    this.http.post("http://localhost:8088/user/login", bodyData).subscribe(
      (resultData: any) => {
        console.log(resultData);
        if (resultData.status) {
          this.router.navigateByUrl('/');
        } else {
          this.errorMessage = "Incorrect Email or Password"; // Hiển thị thông báo lỗi
          console.log("Error login");
        }
      },
      error => {
        this.errorMessage = "An error occurred. Please try again."; // Thông báo khi có lỗi
        console.error("HTTP Error:", error);
      }
    );
  }
}

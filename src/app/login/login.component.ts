import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {ErrorStateMatcher} from "@angular/material/core";
import {Router} from "@angular/router";
import {DataLoginService} from "../services/data-login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formGroup: FormGroup
  matcher = new MyErrorStateMatcher();

  constructor(private formBuilder: FormBuilder,
              private route: Router,
              private dataLoginService: DataLoginService) {

  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  public redirecionarMenu(): void {
    this.dataLoginService.enviarDataUsuario(this.formGroup.value);
    this.route.navigate(['/menu']);
  }

}


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

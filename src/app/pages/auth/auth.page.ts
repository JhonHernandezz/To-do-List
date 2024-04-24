import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  form = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  constructor( private router: Router ) { }

  ngOnInit() {
  }

  async submit() {
    const username = this.form.value.username; // Guardar los datos
    const password = this.form.value.password;

    try {

      let result;

      console.log(result);
      

      let config = {
        method: "POST",
        headers: { 
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
      }
      
      let respuesta = await fetch(`http://127.10.10.10:5130/login`, config)

      const contentType = respuesta.headers.get("Content-Type");

      if (contentType && contentType.includes("application/json")) {
        result = await respuesta.json(); // Procesar como JSON
      } else {
        result = await respuesta.text(); // Procesar como texto
      }

      if (result.status === 400) {
        alert(result.message)
      } else {
        this.router.navigate(['/view']);
        localStorage.setItem("token", result); //Guardar el token en el local storage
      }
      
    } catch (error) {
      console.error(error);
    }

  }

}
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent  implements OnInit {

  constructor(private router: Router) { }

  form = new FormGroup({
    id_state: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    descrription: new FormControl('', [Validators.required]),
    date_start: new FormControl('', [Validators.required]),
    date_end: new FormControl('', [Validators.required])
  })

  ngOnInit() {}

  async submit() {
    const id_state = this.form.value.id_state;
    const name = this.form.value.name;
    const descrription = this.form.value.descrription;
    const date_start = this.form.value.date_start;
    const date_end = this.form.value.date_end;

    let token = localStorage.getItem('token')   

    try {
      let config = {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Authorization": `${token}`,
        },
        body: JSON.stringify({ id_state, name, descrription, date_start, date_end })
      }

      let respuesta = await (await fetch(`http://127.10.10.10:5130/list`, config)).json()

      alert(respuesta.message)

      this.router.navigate(['/view']);

    } catch (error) {
      alert(error)
    }
  }

  cancel() {
    alert('Volviendo a la pagina anterior')
    this.router.navigate(['/view']);
  }
}

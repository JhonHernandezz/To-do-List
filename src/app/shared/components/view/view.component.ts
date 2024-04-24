import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent  implements OnInit {

  tasks: any[] = [];

  constructor( private router: Router ) { }

  ngOnInit() {
    this.consultListTask()
  }

  exit() {

    localStorage.removeItem('token')
    this.router.navigate(['/auth']);
    
  }

  async consultListTask() {
    try {

      let token = localStorage.getItem('token')      

      let config = {
        method: "GET",
        headers: { 
          "Content-Type": "application/json",
          "Authorization": `${token}`,
        }
      }
      
      let respuesta = await (await fetch(`http://127.10.10.10:5130/list`, config)).json()

      this.tasks = respuesta
      
    } catch (error) {
      alert(error)
    }
  }

  updateTask(id: number, id_state: number, date_end: Date, name: string, description_list: string) {
    this.router.navigate(['/update'], {
      queryParams: {
        id,
        id_state,
        date_end: date_end,
        name,
        description_list,
      },
    });
  }

  async deleteTask(id: number) {
    
    let token = localStorage.getItem('token')      

    let config = {
      method: "DELETE",
      headers: { 
        "Content-Type": "application/json",
        "Authorization": `${token}`,
      }
    }

    let respuesta = await (await fetch(`http://127.10.10.10:5130/list/${id}`, config)).json()

    alert(respuesta.message);

    this.consultListTask()
  }

  add() {
    this.router.navigate(['/add']);
  }

}
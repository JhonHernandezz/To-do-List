import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
})
export class UpdateComponent  implements OnInit {

  task: any = {};

  form = new FormGroup({
    id_state: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    descrription: new FormControl('', [Validators.required]),
    date_start: new FormControl('', [Validators.required]),
    date_end: new FormControl('', [Validators.required])
  })

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe((params) => {
      const idParam = params.get('id');
      const idStateList = params.get('id_state');
      const dateEndParam = params.get('date_end');
      const nameParam = params.get('name');
      const descriptionListParam = params.get('description_list');
    
      this.task.id = idParam ?? 0;
      this.task.id_state = idStateList ?? 1;
      this.task.date_end = dateEndParam ? new Date(dateEndParam) : new Date(); 
      this.task.name = nameParam ?? 'Desconocido'; 
      this.task.description_list = descriptionListParam ?? ''; 
    });
  }

  cancel() {
    alert('Volviendo a la pagina anterior')
    this.router.navigate(['/view']);
  }

}

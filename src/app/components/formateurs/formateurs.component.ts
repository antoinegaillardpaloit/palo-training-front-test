import { Component, OnInit } from '@angular/core';
import { FormateursService } from 'src/services/formateurs.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-formateurs',
  templateUrl: './formateurs.component.html',
  styleUrls: ['./formateurs.component.css']
})
export class FormateursComponent implements OnInit {

  data: any = {};
  loading = true;
  errors: any;
  formateurs;
  environment = environment;

  constructor(private formateursService: FormateursService) { }

  ngOnInit(): void {
    this.formateursService.getAllFormateurs().subscribe(res => {
      console.log(res);
      this.formateurs = res;
    });
  }

}

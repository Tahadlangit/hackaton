import { Component } from '@angular/core';

@Component({
  selector: 'app-medical-form',
  templateUrl: './medical-form.component.html',
  styleUrls: ['./medical-form.component.css']
})
export class MedicalFormComponent {
  showForm(formType) {
    document.getElementById('dental-form').style.display = 'none';
    document.getElementById('medical-form').style.display = 'none';
  
    document.getElementById(`${formType}-form`).style.display = 'block';
  }

}

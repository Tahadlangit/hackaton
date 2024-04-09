import { Component } from '@angular/core';

@Component({
  selector: 'app-stud-appointments',
  templateUrl: './stud-appointments.component.html',
  styleUrls: ['./stud-appointments.component.css']
})
export class StudAppointmentsComponent {

toggleDropdownServices() {
  var dropdown = document.getElementById("myDropdown");
  dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
}

clickServices = function services (event) {
  if (!event.target.matches('.dropbtn')) {
      var dropdown = document.getElementById("myDropdown");
          if (dropdown.style.display === 'block') {
              dropdown.style.display = 'none';
          }
      }
}

toggleDropdownNotification() {
  var dropdown = document.getElementById("notificationDropdown");
  dropdown.style.display = dropdown.style.display === "none" ? "block" : "none";
}

clickNotification = function notification (event) {
  if (!event.target.matches('.notification-bell')) {
      var dropdown = document.getElementById("notificationDropdown");
      if (dropdown.style.display === "block") {
          dropdown.style.display = "none";
      }
  }
}

showForm(formType) {
  document.getElementById('dental-form').style.display = 'none';
  document.getElementById('medical-form').style.display = 'none';

  document.getElementById(`${formType}-form`).style.display = 'block';
}

}

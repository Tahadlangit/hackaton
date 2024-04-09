import { Component, OnInit } from '@angular/core';
import { Student } from '../student-model';
import { StudentService } from '../student-services.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-stud-delete-update-appointment',
  templateUrl: './stud-delete-update-appointment.component.html',
  styleUrls: ['./stud-delete-update-appointment.component.css']
})
export class StudDeleteUpdateAppointmentComponent implements OnInit {

  students: Student[] = [];
  isUpdating = false;
  selectedStudent: Student | undefined;

  constructor(private studentService: StudentService) {}


  ngOnInit(): void {
    this.students = this.studentService.getStudents();
  }

  updateStudent(student: Student): void {
    this.selectedStudent = { ...student };
    this.isUpdating = true;
  }

  saveUpdatedStudent(updatedStudent: Student): void {
    this.studentService.updateStudent(updatedStudent);
    this.isUpdating = false;
    this.students = this.studentService.getStudents(); // Refresh the list
  }

  cancelUpdate(): void {
    this.isUpdating = false;
  }

  deleteStudent(id: number): void {
    // Display overlay warning
    const isConfirmed = window.confirm('Are you sure you want to delete this student?');
    if (isConfirmed) {
      this.studentService.deleteStudent(id);
      this.students = this.studentService.getStudents(); // Refresh the list
    }
  }
  
/////////////////////////////////////

  showForm(formType) {

    document.getElementById('update-form').style.display = 'none';
    document.getElementById('delete-form').style.display = 'none';
  
    document.getElementById(`${formType}-form`).style.display = 'block';
  }

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

  
}

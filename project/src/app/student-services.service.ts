import { Injectable } from '@angular/core';
import { Student } from './student-model';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private students: Student[] = [
    { id: 1, studid: '201933476', appointment: 'Dental | Teeth Cleaning', appointmentDate: '2023-12-01', appointmentTime: '9:00 AM' },
    { id: 2, studid: '201933476', appointment: 'Dental | Tooth Extraction', appointmentDate: '2023-12-02', appointmentTime: '11:00 AM' },
    { id: 3, studid: '201933476', appointment: 'Medical | Check-Up', appointmentDate: '2023-12-14', appointmentTime: '1:30 PM' },
    { id: 4, studid: '201933476', appointment: 'Medical | Request Prescription', appointmentDate: '2023-12-25', appointmentTime: '8:30 AM' },
    // Add more sample data if needed
  ];

  getStudents(): Student[] {
    return this.students;
  }

  getStudentById(id: number): Student | undefined {
    return this.students.find((student) => student.id === id);
  }

  updateStudent(student: Student): void {
    const index = this.students.findIndex((s) => s.id === student.id);
    if (index !== -1) {
      this.students[index] = student;
    }
  }

  deleteStudent(id: number): void {
    this.students = this.students.filter((student) => student.id !== id);
  }
}
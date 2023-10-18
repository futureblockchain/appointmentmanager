import { Component } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { Appointment } from '../appointment.model';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css'],
})
export class AppointmentFormComponent {
  newAppointment: Appointment = {
    title: '',
    date: new Date(),
    time: '',
    clientName: '',
    responsibleDoctor: '',
  };

  constructor(private appointmentService: AppointmentService) {}

  onSubmit(): void {
    this.appointmentService.addAppointment(this.newAppointment);
    this.newAppointment = {
      title: '',
      date: new Date(),
      time: '',
      clientName: '',
      responsibleDoctor: '',
    };
  }
}
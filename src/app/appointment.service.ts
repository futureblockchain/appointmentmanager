import { Injectable } from '@angular/core';
import { Appointment } from './appointment.model';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  private appointments: Appointment[] = [];

  constructor() {}

  getAppointments(): Appointment[] {
    return this.appointments;
  }

  addAppointment(appointment: Appointment): void {
    this.appointments.push(appointment);
  }
}
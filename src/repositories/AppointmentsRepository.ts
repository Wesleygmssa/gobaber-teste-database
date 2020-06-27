import { isEqual } from 'date-fns';// bliblioteca para datas
import Appointment from '../models/Appointment'; //class de agendamento

// Data Transfer Object
interface CreateAppointementDTO {provider: string,date: Date,} //definindo o tipo

class AppointmentsRepository { //responsavel por armanezar , editar, exluir etc...

  private appointments: Appointment[] = [];

  public create({ date, provider }: CreateAppointementDTO){
    const appointment = new Appointment({ provider, date });
    this.appointments.push(appointment);

    return appointment;
  }

  public findByDate(date: Date){
    const findAppointment = this.appointments.find(appointment => isEqual(date, appointment.date));
    return findAppointment || null;
  }

  public all() {
    return this.appointments;
  }
  
}
export default AppointmentsRepository;
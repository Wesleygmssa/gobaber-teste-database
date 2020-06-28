import Appointment from '../models/Appointment'; //class de agendamento

import {EntityRepository, Repository} from 'typeorm';

@EntityRepository(Appointment)
class AppointmentsRepository extends Repository<Appointment> { //responsavel por armanezar , editar, exluir etc...

  public async findByDate(date: Date){
    // const findAppointment = this.appointments.find(appointment => isEqual(date, appointment.date));

    const findAppointment = await this.findOne({
      where:{date: date}
    });

    return findAppointment || null;
  }

 
  
}
export default AppointmentsRepository;
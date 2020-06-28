import { startOfHour } from 'date-fns';
import {getCustomRepository} from 'typeorm';
import Appointment from '../models/Appointment';
import AppointmentsRepository from '../repositories/AppointmentsRepository';// SERÁ RECEBIDO COMO PARAMETROS DA CLASS

//SOLID

// Single Responsability Principle
// Dependency Inverstion Principe


//TIPO DAS VARIAVEIS
interface Request {
    provider: string;
    date: Date;
}
//REGRA DE NEGOCIOS
class CreateAppointmentService {

    public async execute({ provider, date }: Request) {
        const appointmentsRepository = getCustomRepository(AppointmentsRepository);

        const appointmentDate = startOfHour(date); //HORA EX: 12:00:00

        const findAppointmentInSameDate = await appointmentsRepository.findByDate(appointmentDate); 

        if (findAppointmentInSameDate) 
        throw Error('This appointment is already booked'); //TRATATIVA DE ERROS E EXCESSÕES

        const appointment = appointmentsRepository.create({ 
            provider, 
            date: appointmentDate 
        });

        await appointmentsRepository.save(appointment);

        return appointment;
    }
}

export default CreateAppointmentService;
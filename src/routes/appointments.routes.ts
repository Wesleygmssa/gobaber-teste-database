import { Router } from 'express';
import {  parseISO } from 'date-fns'; 

import AppointmentsRepository from '../repositories/AppointmentsRepository'; 
import CreateAppointmentService from '../services/CreateAppointmentService';

const appointmentsRouter = Router(); 

const appointmentsRepository = new AppointmentsRepository(); 


appointmentsRouter.get('/',(request, response)=>{

    const appointments = appointmentsRepository.all(); 

    return response.json(appointments); 
});

appointmentsRouter.post('/', (request, response) => {

    try{
        const { provider, date } = request.body; // recebendo dados 

        const parsedDate = parseISO(date); // transfromando dados
        
        const createAppointment = new CreateAppointmentService(appointmentsRepository); // esse objeto recebe dados para contructor a class appointmentsRepository
    
        const appointment = createAppointment.execute({date:parsedDate, provider});// chamando (function execut) e retorna um appointment.
      
        return response.json(appointment);
    
    } catch (err){return response.status(400).json({error: err.message});}
   
});

export default appointmentsRouter;
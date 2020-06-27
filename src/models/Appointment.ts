import {uuid} from 'uuidv4'; 

//formato dos dados
class Appointment {

    id: string;

    provider: string;

    date: Date;

    constructor({provider, date }: Omit<Appointment, 'id'>){ // value initial
        this.id = uuid();
        this.provider = provider;
        this.date = date
    }
}

export default Appointment;
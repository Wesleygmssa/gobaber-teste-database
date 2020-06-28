import {Entity, Column, PrimaryColumn} from 'typeorm';

@Entity('appointments')
class Appointment {
    @PrimaryColumn('uuid')
    id: string;

    @Column()
    provider: string;
    
    @Column('timestamp with time zone')
    date: Date;

    // constructor({provider, date }: Omit<Appointment, 'id'>){ // value initial
    //     this.id = uuid();
    //     this.provider = provider;
    //     this.date = date
    // }
}

export default Appointment;
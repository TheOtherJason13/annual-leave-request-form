import React from "react";
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import './styles.css';

type FormValues = {
    firstName: string;
    lastName: string;
    email: string;
    leaveType: string;
    fromTime: string;
    toTime: string;
    supervisor: string;
    fromDate: Date;
    toDate: Date;
}



function App() {
 
  const { register, handleSubmit, control } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = data => console.log(data);

  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <label htmlFor="firstName">First Name</label>
      <input placeholder="mike" {...register("firstName")} />

      <label htmlFor="lastName">Last Name</label>
      <input placeholder="test" {...register("lastName")} />

      <label htmlFor="email">Email</label>
      <input
        placeholder="whoevenuses@hotmail.com"
        type="email"
        {...register("email")}
      />

      

      <label>Leave Type</label>
      <select {...register("leaveType")}>
        <option defaultValue={'select'} value="select">Select</option>
        <option value="annual">Annual</option>
        <option value="sick">Sick</option>
        <option value="floating">Floating</option>
      </select>
      <label>From Date</label>
      
        <Controller
          control={control}
          name="fromDate"
          render={({ field }) => (
            <ReactDatePicker
              className="input"
              placeholderText="Select date"
              onChange={(e) => field.onChange(e)}
              selected={field.value}
              />
              
          )}
          />
      <label>To Date</label>
        <Controller
          control={control}
          name="toDate"
          render={({ field }) => (
            <ReactDatePicker
              className="input"
              placeholderText="Select date"
              onChange={(e) => field.onChange(e)}
              selected={field.value}
              />
          )}
          />
          
          <label>From Time</label>
      <select {...register("fromTime")}>
        <option defaultValue={'select'} value="select">Select</option>
        <option value="8:00">8:00 AM</option>
        <option value="9:00">9:00 AM</option>
        <option value="10:00">10:00 AM</option>
      </select>

      <label>To Time</label>
      <select {...register("toTime")}>
        <option defaultValue={'select'} value="select">Select</option>
        <option value="1:00">1:00 PM</option>
        <option value="2:00">2:00 PM</option>
        <option value="3:00">3:00 PM</option>
        <option value="4:00">4:00 PM</option>
        <option value="5:00">5:00 PM</option>
      </select>
          


    <label>Supervisor</label>
      <select {...register("supervisor")}>
        <option defaultValue={'select'} value="select">Select</option>
        <option value="person1">Person1</option>
        <option value="boss2">Boss2</option>
        <option value="manager3">Manager3</option>
      </select>
          
      
      <input type="submit" />
    </form>
  );
}



export default App;
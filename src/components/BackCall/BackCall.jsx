import React from 'react';
import './BackCall.less';
import { useForm } from "react-hook-form";

function BackCall() {
  const { register, 
    formState: { errors, isValid }, 
    handleSubmit, 
    reset 
  } = useForm({
    mode: 'onBlur'
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  };

  const validateTrim = (value) => {
    if (value.trim() === '') {
      return 'This field cannot be empty or contain only spaces';
    }
    return true;
  };

  return (
    <div className="backCall-container">
      <h1 className="backCall-title">We will call you in 24 hours</h1>
      <form className="backCall-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="backCall-inputWrapper">
          <label className='backCall-label'>
            <input
              {...register('name', {
                required: 'Please enter a name',
                validate: validateTrim
              })}
              className="backCall-input"
              placeholder="write your name"
            />
            {errors?.name && <p className='backCall-errors'>{errors?.name?.message || 'error!'}</p>}
          </label>
          <label className='backCall-label'>
            <input
              {...register('phone', {
                required: 'Please enter a phone number',
                pattern: {
                  value: /^(?:(?:\+|00)420\s?)?\d{3}\s?\d{3}\s?\d{3}$/,
                  message: 'Phone number is not valid example(777 777 777)'
                },
                validate: validateTrim
              })}
              className="backCall-input"
              placeholder="write your phone number"
            />
            {errors?.phone && <p className='backCall-errors'>{errors?.phone?.message || 'error!'}</p>}
          </label>
        </div>
        <button className="backCall-button" type="submit" disabled={!isValid}>
          Order call
        </button>
      </form>
    </div>
  );
}

export default BackCall;


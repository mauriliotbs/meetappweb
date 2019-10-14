import React, { useRef, useEffect, useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import pt from 'date-fns/locale/pt';
import { useField } from '@rocketseat/unform';

import 'react-datepicker/dist/react-datepicker.css';

export default function DateInput({ name }) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [selected, setSelected] = useState(defaultValue);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });
  }, [ref.current, fieldName]); // eslint-disable-line

  return (
    <>
      <ReactDatePicker
        name={fieldName}
        placeholderText="Data do meetup"
        locale={pt}
        selected={selected}
        onChange={date => setSelected(date)}
        ref={ref}
        minDate={new Date()}
        showTimeSelect
        timeCaption="horário"
        timeIntervals={15}
        dateFormat="'Dia' dd 'de' MMMM 'de' yyyy', às' HH:mm"
      />
      {error && <span>{error}</span>}
    </>
  );
}

DateInput.propTypes = {
  name: PropTypes.string.isRequired,
};

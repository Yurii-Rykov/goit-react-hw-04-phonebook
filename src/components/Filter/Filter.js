import React from 'react';
import s from './Filter.module.css'

const Filter = ({ onValue, onChange }) => {
  return (
    <label className={s.filter_label}>
      Find contacts by name
      <input className={s.filter_input} type="text" value={onValue} onChange={onChange} />
    </label>
  );
};

export default Filter;

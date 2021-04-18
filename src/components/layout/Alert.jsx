import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alert = () => {
  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;
  const { type, msg } = alert;
  return type && msg ? (
    <div className={`alert alert-${alert.type}`}>
      <i className='fas fa-info-circle'></i> {alert.msg}
    </div>
  ) : null;
};

export default Alert;

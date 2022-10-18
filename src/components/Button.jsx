import React from 'react';
import '../styles/Button.css';

const Button = (props) => {
  const isOperator = (valor) => {
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
  }

  return (
    <div className={`button-container ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()} onClick={() => props.clickManager(props.children)}>
      {props.children}
    </div>
  );
}

export default Button;
import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES: string[] = ['btn--primary', 'btn--outline'];

const SIZES: string[] = ['btn--medium', 'btn--large'];

interface ButtonProps {
  className?: string,
  children?: React.ReactChild[] | string,
  type?: any,
  buttonStyle?: string,
  onClick?: any,
  buttonSize?: string
}

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => { 
  const btnStyle: string  = props.buttonStyle===undefined ? STYLES[0] : props.buttonStyle;
  const btnSize: string = props.buttonSize === undefined ? SIZES[0] : props.buttonSize;
  
  const checkButtonStyle:string =  STYLES.includes(btnStyle) ? btnStyle : STYLES[0];
  
  const checkButtonSize:string = SIZES.includes(btnSize) ? btnSize : SIZES[0];
  
  return (
    <Link to='./sign-up' className="btn-mobile">
      <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={props.onClick}
        type = {props.type}
      >
        {props.children}
      </button>
    </Link>
  )
}
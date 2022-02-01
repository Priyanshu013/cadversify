import React from "react";
import '../CSS/Button.css';

const STYLES = [
    'navbar-btn--primary',
    'navbar-btn--outline'
]

const SIZES = [
    'navbar-btn--medium',
    'navbar-btn--large'
]

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0] 

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0] 

    return (
        <button className={`navbar-btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick}
        type={type}>
            {children}
        </button>
    )
}
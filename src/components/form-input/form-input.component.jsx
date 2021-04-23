import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, id, ...otherProps }) => {
    return (
        <div className='group'>
            <input className='form-input' autoComplete={`off`} onChange={ handleChange } id={id} {...otherProps} />
            {
                label   ?
                (<label className={`form-input-label`} htmlFor={id}>
                    { label } 
                    {/* <span><i class="fas fa-chevron-circle-down"></i></span> */}
                    <span><i className={"fas fa-long-arrow-alt-down"}></i></span>
                </label>)
                : null
            }
        </div>
    )
}    



export default FormInput;
import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, id, ...otherProps }) => 
{
    console.log(id)
    return (
        <div className='group'>
            <input className='form-input' onChange={ handleChange } id={id} {...otherProps} />
            {
                label   ?
                (<label className={`form-input-label`} for={id}>
                    { label } 
                    {/* <span><i class="fas fa-chevron-circle-down"></i></span> */}
                    <span><i class="fas fa-long-arrow-alt-down"></i></span>
                </label>)
                : null
            }
        </div>
    )
}    



export default FormInput;
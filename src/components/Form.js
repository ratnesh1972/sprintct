import React, { useState } from 'react';

const Form = ({ addNewData }) => {
    const [input, setinput] = useState({
        name: '',
        email: '',
        eduselect: 'MTech / BE',
        studying: false
    });

    const handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setinput(current => ({ ...current, [name]: value }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addNewData({ name: input.name, email: input.email, eduselect: input.eduselect, studying: input.studying });
        setinput({
            name: '',
            email: '',
            eduselect: 'MTech / BE',
            studying: false
        });
        alert('Data Submitted!');
    }

    return (
        <div className="content-form">
            <h2>Add Profile Data</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Enter Name" value={input.name} required onChange={handleChange} />
                <input type="email" name="email" placeholder="Enter Email" value={input.email} required onChange={handleChange} />
                <label>Select Education</label>
                <select name="eduselect" value={input.eduselect} onChange={handleChange}>
                    <option value="MTech / BE">MTech / BE</option>
                    <option value="MSC / BSC">MSC / BSC</option>
                    <option value="MCA / BCA">MCA / BCA</option>
                </select>
                <div className="for-study">
                    <input className="check" type="checkbox" name="studying" checked={input.studying} onChange={handleChange} />
                    <label className="label-for-study">Still Studying?</label>
                </div>
                <input type="submit" value="Add Data" />
            </form>
        </div>
    )
}

export default Form;

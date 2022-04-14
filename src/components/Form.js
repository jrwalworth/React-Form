import React, {useState} from 'react';
import './Form.css';

const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    // const [error, setError] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {firstName, lastName, email, password, confirmPassword};
        // console.log('Form Submitted:', e.target);
        console.log(newUser);
        if (email && password) {
            console.log('Form submitted for', firstName)
        } else {
            console.log('Form not submitted.')
        }
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('form submitted', e.target);
    }


    return (
        <div className="myForm">
            {/* {error && error > 10 && <p>foirm not submitted</p>} */}
            {firstName && firstName < 5 && <p>First name must contain a value.</p>}
            {lastName && lastName < 5 ? <p>Last name must contain a value.</p> : null}
            {confirmPassword && password != confirmPassword && <p>Passwords must match.</p>}
            <form onSubmit={ createUser } >
                <section className="form-sect">
                    <label htmlFor="firstName" className="col-25">First Name:</label>
                    <input type="text" value={firstName} onChange={ (e) => setFirstName(e.target.value) }name="firstName" id="firstName" className="col-75"/>
                </section>
                <section className="form-sect">
                    <label htmlFor="lastName" className="col-25">Last Name:</label>
                    <input type="text" value={lastName} onChange={ (e) => setLastName(e.target.value) }name="lastName" id="lastName" className="col-75"/>
                </section>
                <section className="form-sect">
                    <label htmlFor="email" className="col-25">Email:</label>
                    <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) }name="email" id="email" className="col-75"/>
                </section>
                <section className="form-sect">
                    <label htmlFor="password" className="col-25">Password:</label>
                    <input type="password" value={password} onChange={ (e) => setPassword(e.target.value) }name="password" id="password" className="col-75"/>
                </section>
                <section className="form-sect">
                    <label htmlFor="confirm" className="col-25">Confirm Password:</label>
                    <input type="password" value={confirmPassword} onChange={ (e) => setConfirmPassword(e.target.value) }name="confirm" id="confirm" className="col-75"/>
                </section>
                <button type="submit">Create User</button>
            </form>
            <div className="form-details">
                <h2>Your Form Data</h2>
                <div>
                    <section className="det-sect">
                        <h4>First Name:</h4>
                        <p>{firstName}</p>
                    </section>
                    <section className="det-sect">
                        <h4>Last Name:</h4>
                        <p>{lastName}</p>
                    </section>
                    <section className="det-sect">
                        <h4>Email:</h4>
                        <p>{email}</p>
                    </section>
                    
                    <section className="det-sect">
                        <h4>Password:</h4> 
                        <p>{password}</p>
                    </section>
                    <section className="det-sect">
                        <h4>Confirm Password:</h4>
                        <p>{confirmPassword}</p>
                    </section>
                </div>
            </div>
        </div>
        

    );

}
//validations?

export default Form;


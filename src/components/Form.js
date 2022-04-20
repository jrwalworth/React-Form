import React, {useState} from 'react';
import './Form.css';

const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
<<<<<<< HEAD
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
=======
    const [error, setError] = useState("");
>>>>>>> 5744fbe (Set error state message.)

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {firstName, lastName, email, password};
        // console.log('Form Submitted:', e.target);
        console.log(newUser);
        // {firstName && firstName < 5 && <p>First name must contain a value.</p>}

        if (firstName < 1) {
            return <p>First name must contain a value.</p>
            console.log('Form not submitted for', firstName)
            
        } else {
<<<<<<< HEAD
            console.log('Form submitted for ', firstName)
=======
            console.log('Form not submitted.')
            setError('Please fill in the form to submit.')
>>>>>>> 5744fbe (Set error state message.)
        }
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setHasBeenSubmitted(true);
    };
    const formMessage = () => {
        if (hasBeenSubmitted) {
            return <h4>Thank you for submitting the form!</h4>;
        } else {
            return <h4>Welcome, please submit the form.</h4>;
        }
    }


    return (
        <div className="myForm">
<<<<<<< HEAD
            { formMessage() }
=======
            {error && <p className="error">{error}</p>}
            {firstName && firstName < 5 && <p>First name must contain a value.</p>}
            {lastName && lastName < 5 ? <p>Last name must contain a value.</p> : null}
            {confirmPassword && password != confirmPassword && <p>Passwords must match.</p>}
>>>>>>> 5744fbe (Set error state message.)
            <form onSubmit={ createUser } >
                {firstName && firstName.length < 2 && <span>First name must contain a value.</span>}
                <section className="form-sect">
                    <label htmlFor="firstName" className="col-25">First Name:</label>
                    <input type="text" value={firstName} 
                        onChange={ (e) => setFirstName(e.target.value) }
                        name="firstName" id="firstName" className="col-75"/>
                </section>
                {lastName && lastName.length < 2 ? <span>Last name must contain a value.</span> : null}
                <section className="form-sect">
                    <label htmlFor="lastName" className="col-25">Last Name:</label>
                    <input type="text" value={lastName} 
                        onChange={ (e) => setLastName(e.target.value) }
                        name="lastName" id="lastName" className="col-75"/>
                </section>
                {email && email.length < 5 ? <p>Email must be valid.</p> : null}
                <section className="form-sect">
                    <label htmlFor="email" className="col-25">Email:</label>
                    <input type="text" value={email} 
                        onChange={ (e) => setEmail(e.target.value) }
                        name="email" id="email" className="col-75"/>
                </section>
                {confirmPassword && password != confirmPassword && <p>Passwords must match.</p>}
                <section className="form-sect">
                    <label htmlFor="password" className="col-25">Password:</label>
                    <input type="password" value={password} 
                        onChange={ (e) => setPassword(e.target.value) }
                        name="password" id="password" className="col-75"/>
                </section>
                <section className="form-sect">
                    <label htmlFor="confirm" className="col-25">Confirm Password:</label>
                    <input type="password" value={confirmPassword} 
                        onChange={ (e) => setConfirmPassword(e.target.value) }
                        name="confirm" id="confirm" className="col-75"/>
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


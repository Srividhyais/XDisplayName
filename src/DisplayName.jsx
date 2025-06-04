import react, { useState } from "react";

const DisplayName = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [fullName, setFullName] = useState('');

    const handleSubmit = (e) => {
    e.preventDefault();
    setFullName(`${firstName} ${lastName}`);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name:</label> 
                <input type="text" id="firstName" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required/>
                <br /> 
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" id="lastName" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required/>
                <br />
                <button id="displayNameButton" type="submit">Submit</button>
            </form>
            {fullName && (
                <div>
                    Full Name: {fullName}
                </div>
            )}
        </div>
    );

};

export default DisplayName;

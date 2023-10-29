import React, {useState} from "react";
import SignupForm from "./SignupForm.js";
import  "../App.css";
import SignupFormSuccess from "./SignupFormSuccess.js"

const Form = () => {

    const [formIsSubmitted, setFormIsSubmitted] = useState(false);
    const submitForm =() => {
        setFormIsSubmitted(true);
    };
    return (
        <div>
        { !formIsSubmitted ? (
        <SignupForm submitForm={submitForm} />
        ) : ( <SignupFormSuccess/> 
        )}
        </div>
    );
};

export default Form;
import React from "react";
import useForm from "./UseFofm";
import Logo from "./logo.png";

const SignupForm = ({ submitForm }) => {
const { handleChange, handleFormSubmit, values, errors} = useForm(
    submitForm
    );
    return (
        <div className="app-wrapper-main">
            <div className="logo">
            {/* Нажимая на logo переходим на главную страницу */}
      <a href="#"><img src={Logo} alt="logo" width={70} height={94}/></a> 
          </div>
            <div className="app-wrapper">
                <div>
                    <h2 className="title">Create Account</h2>
                </div>
                <form className="form-wrapper">
                    <div className="name">
                        <label className="label">Full name</label>
                        <input className="input" type="text" name="fullname" value={values.fullname} onChange={handleChange}/>
                        {errors.fullname && <p className="error">{errors.fullname}</p>}
                    </div>
                    <div className="email">
                        <label className="label">Email</label>
                        <input className="input" type="email" name="email" value={values.email} onChange={handleChange}/>
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                    <div className="password">
                        <label className="label">Password</label>
                        <input className="input" type="password" name="password" value={values.password} onChange={handleChange}/>
                        {errors.password && <p className="error">{errors.password}</p>}
                    </div>
                    <div>
                        <button className="submit" onClick={handleFormSubmit}>Sign Up</button>
                    </div>
                </form>
            
                </div>
        </div>
    )
}

export default SignupForm;
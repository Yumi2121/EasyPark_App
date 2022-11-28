import React from "react";
import Form from "../../components/form/Form";
import "./login.css";



const Login = () => {
const [option, setOption] = React.useState(1)

return (
    <div className='container'>
            <header>
                <div className={'header-headings ' + (option === 1 ? 'sign-in' : 'sign-up')}>
                    <span>Sign in to your account</span>
                    <span>Create an account</span>
                </div>
            </header>
            <ul className='options'>
                <li className={option === 1 ? 'active' : ''} onClick={() => setOption(1)}>Sign in</li>
                <li className={option === 2 ? 'active' : ''} onClick={() => setOption(2)}>Sign up</li>
                {/* <li className={option === 3 ? 'active' : ''} onClick={() => setOption(3)}>Forgot</li> */}
            </ul>
            
            <Form option={option} />
     
    </div>
    )
}

export default Login;





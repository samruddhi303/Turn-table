import React, {useState, useEffect} from 'react'
import axios from "axios"
import swal from 'sweetalert';
import { currentUser } from './../../util/currentUser'
import "./Signup.css"

function Signup() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [role, setrole] = useState('user')

    useEffect(() => {
        if(currentUser){
            window.location.href="/"
        }
      }, [])
    
    async function signupUser() {
     const response = await axios.post('/signup', {
        name: name,
        email: email,
        phone: phone,
        password: password,
        role: role
    })
    console.log(response.data)
    if(response.data.success){
        await swal({
            title: "Success",
            text: response.data.message,
            icon: "success",
            button: "Aww yiss!",
          });
        window.location.href = '/login'
    }
    else{
        swal({
            title: "Error",
            text: response.data.message,
            icon: "error",
            button: "Try Again!",
          });
        setName('')
        setEmail('')
        setPhone('')
        setPassword('')
    }
}
  return (
       <div>
        <h1 className='text-center'>Signup</h1>
        <div className='row'>
            <div className='col-md-6'>

            </div>
            <div className='col-md-6'>
                <div className='form-container'>
                    <form>
                        <div className='form-group'>

                           <div>
                            <label htmlFor='name'>Name: </label>
                            <input type='text' className='form-control' id='name' placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} /><br/>
                            </div>
                            
                            <div>
                            <label htmlFor='email'>Email: </label>
                            <input type='text' className='form-control' id='email' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} /><br/>
                            </div>

                            <div>
                            <label htmlFor='phone'>Phone: </label>
                            <input type='text' className='form-control' id='phone' placeholder='Enter Phone' value={phone} onChange={(e) => setPhone(e.target.value)} /><br/>
                            </div>

                            <div>
                            <label htmlFor='password'>Password: </label>
                            <input type='text' className='form-control' id='password' placeholder='Enter Password'  value={password} onChange={(e) => setPassword(e.target.value)} /><br/>
                           
                        </div>
                        <div>
                            <button type = 'button' className='signup-button' onClick={signupUser}>Signup</button>
                        </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
       </div>
  )
 
}

export default Signup

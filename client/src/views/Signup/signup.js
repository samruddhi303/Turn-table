import React, {UseState} from 'react'
import axios from "axios"
import  "./signup.css"

function signup() {
    const [name, setName] = UseState('')
    const [email, setEmail] = UseState('')
    const [phone, setPhone] = UseState('')
    const [password, setPassword] = UseState('')// eslint-disable-next-line
    const [role, setrole] = UseState('user')
    
    async function signupUser() {
     const Response = await axios.post('/Signup', {
        name: name,
        phone: phone,
        email: email,
        password: password,
        role: role
    })
    console.log(Response.data)
    if(Response.data.success){
        alert(Response.data.message)
        window.location.href = '/login'
    }
    else{
        alert(Response.data.message)
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

export default signup

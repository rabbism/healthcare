import React from 'react';
import useAuth from '../Hooks/useAuth';
import { useLocation, useHistory } from 'react-router-dom';

const Login = () => {
  const{googleInUsingSignIn}=useAuth()
  const location =useLocation()
  const history =useHistory()
  const redirect_uri = location.state?.from || '/home';
  const handelClick =() =>{
    googleInUsingSignIn()
        .then(result=> {
          console.log(result)
           history.push(redirect_uri);
      // const user = result.user;
      // console.log(user);
      // setUser(user)

       })
  }
    return (
        <div>
            <div className='w-50 m-auto mt-5'>
            <div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Email address</label>
</div>
<div class="form-floating">
  <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
  <label for="floatingPassword">Password</label>
  <button class="btn btn-primary mt-3">Loge In</button>
</div>
            </div>
            <div className='w-75 m-auto mt-5 text-center'>
            <button onClick={handelClick}  className='btn btn-dark mt-5'>Google Sign </button>
        </div>
        </div>
    );
};

export default Login;
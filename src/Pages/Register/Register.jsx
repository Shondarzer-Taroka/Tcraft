import { useContext, useEffect } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    let {createUser,updateUser}=useContext(AuthContext)

    useEffect(() => {
      document.querySelector("html").setAttribute("data-theme", 'light');
    }, []);

    let navigate= useNavigate()
    let loc=useLocation()
    console.log(loc);
    function onsubmit(e) {
        e.preventDefault()
        let email=e.target.email.value
        let password=e.target.password.value
        let name=e.target.name.value 
        let photo=e.target.image.value
        console.log(email,password,name,photo);

        
     if (password.length<6) {
        // toast.error('You should take at least 6 characters')
        toast.error('You should take at least 6 characters')
        return ;
       }
       else if (!/[A-Z]/.test(password)) {
        toast.error('You should take an uppercase')
      
       return;
       }
       else if (!/[a-z]/.test(password)) {
        toast.error('You should take a lowercase')
       
        return;
       }

    // if (password.length<6) {
    //     alert('jk')
    //     toast.success('j')
    // }

        createUser(email,password)
        .then((result=>{
            let logUser=result.user 
            console.log(logUser);
            updateUser(name,photo)
            .then(()=>{

            })
            .catch(er=>{
              console.log(er);
            })
            e.target.reset()
            toast.success('Successfully registered')
            // location.reload()
            setTimeout(()=>{
              navigate(loc?.state ? loc.state : '/')
              location.reload()
            },1000)
        }))
        .catch(er=>{
            er.message=='Firebase: Error (auth/email-already-in-use).' ? toast.error('Email already in used'):''
            console.log(er.message);
            // console.log(er);
        })

    }
    return (
<div className="hero min-h-screen bg-base-200">
  {/* <Helmet>
    <title>Register</title>
  </Helmet> */}
  <div className="md:hero-content flex-col ">
    <div className="text-center">
      <h1 className="text-5xl font-bold">Register</h1>
     
    </div>
    <div className="my-3 md:my-1 card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={onsubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" name="name" className="input input-bordered"  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered"  required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" name="image" placeholder="Photo URL" className="input input-bordered"  />
        </div>
        <div className="form-control">
          <label className="label ">
            <span className="label-text">Password</span>
          </label>
          <div className="relative">
             <input type='password' name="password" required placeholder="password"  className="input input-bordered"  />
             {/* <input type={toggle? 'text' : 'password'} name="password" required placeholder="password"  className="input input-bordered"  /> */}
             <span  className="absolute bottom-[17px] right-[1px]">
             {/* <span onClick={handleToggle} className="absolute bottom-[17px] right-[1px]"> */}
              {/* {toggle ? <FaEye /> :<  IoEyeOffSharp /> } */}
            
             </span>
            
          </div>
         
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button  className="btn btn-primary">Register</button>
        </div>
      </form>


        <div className="form-control flex gap-4 p-5">
    
                <p>Aleady Registered? <Link  to={'/login'}>please <span className="underline text-blue-500 font-semibold">Log In </span> </Link> </p>
               
        </div>

    </div>


  </div>
 <ToastContainer></ToastContainer>
</div>

    );
};

export default Register;
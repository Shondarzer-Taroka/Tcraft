import { useContext } from "react";
import { FaGoogle, FaTwitter } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";

const LogIn = () => {
    let {signInUser,signInbyGoogle,signInbyTwitter}=useContext(AuthContext)
    let navigate= useNavigate()
    let loc=useLocation()
    console.log(loc);
    function onsubmit(e) {
    e.preventDefault()
    let email=e.target.email.value
    let password=e.target.password.value
    console.log(email,password);
    
    signInUser(email,password)
    .then((result)=>{
      let user=result.user 
      // navigate(loc?.state ? loc.state : '/')
      toast.success('Successfully Log In')
      setTimeout(()=>{
        navigate(loc?.state ? loc.state : '/')
       },1000)
      e.target.reset()
      console.log(user);
    })
    .catch((er)=>{
      console.log(er.message);
      let storeError=[]
      let errorLetter=er.message.split(' ')[2].split('')
      for (let i = 6; i < errorLetter.length-2; i++) {
       
       storeError.push(errorLetter[i])
       // console.log(ll[i]);
       
      }
      er.message=="Firebase: Error (auth/invalid-credential)." ? toast.error( "Invalid Email Or Password"): toast.error(storeError.join(''))
    })

    }

    function handleLogInWithGoogle() {
      signInbyGoogle()
      .then((result)=>{
        let user=result.user 
        toast.success('Successfully log In')
        setTimeout(()=>{
          navigate(loc?.state ? loc.state : '/')
         },1000)
        console.log(user);
      })
      .catch(er=>{
        console.log(er);
        toast.error(er.message)
      })
    }

    function handleSignInBytwitter() {
      signInbyTwitter()
      .then((result)=>{
        let user=result.user 
        toast.success('Successfully log In')
        setTimeout(()=>{
          navigate(loc?.state ? loc.state : '/')
         },1000)
        console.log(user);
      })
      .catch(er=>{
        console.log(er);
        toast.error(er.message)
      })
    }
    return (
<div className="hero min-h-screen bg-base-200">
  <div className="md:hero-content flex-col">
    <div className="text-center ">
      <h1 className="text-5xl font-bold">Login now!</h1>
    </div>
    <div className="my-3 md:my-1 card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={onsubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <div className="relative">
             <input type="password" placeholder="password" required name="password" className="input input-bordered"  />
          </div>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <h1 className="my-5 pl-6">Or Log In with </h1>
        <div className="form-control flex gap-4 p-5">
        <button onClick={handleLogInWithGoogle} className="btn btn-outline"> <FaGoogle></FaGoogle> <span> Google</span></button>
        <button onClick={handleSignInBytwitter} className="btn btn-outline"> <FaTwitter></FaTwitter> <span>Twitter</span> </button>
        <p>Not Registered? <Link to={'/register'}>please <span className="underline text-blue-500 font-semibold">Register</span> </Link> </p>
        </div>
    </div>
  </div>
  <ToastContainer></ToastContainer>
</div>
    );
};

export default LogIn;
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import img from '../../assets/images/login/login.svg';
import google from '../../assets/images/login/download.png';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvaider/AuthProvaider';
import { updateProfile } from 'firebase/auth';
import toast from 'react-hot-toast';

const Register = () => {
  const { googlesignIn, createUser } = useContext(AuthContext);

  const handlerRegister = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then(result => {
        const loggedUser = result.user;
        updateUser(loggedUser, name);
        toast.success('Registation success');
        form.reset();
      })
      .catch(er => console.log(er.message));
  };

  const updateUser = (user, name) => {
    updateProfile(user, {
      displayName: name,
    })
      .then(() => {})
      .catch(er => console.log(er.message));
  };
  const handlerGoogleLogin = () => {
    googlesignIn()
      .then(result => {
        const loogedUser = result.user;
        console.log(loogedUser);
        toast.success('Registation success');
      })
      .catch(er => console.log(er.message));
  };
  return (
    <div className="hero min-h-[calc(100vh-80px)] ">
      <div className="flex justify-evenly w-full  flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img className="w-full lg:w-10/12" src={img} alt="" />
        </div>
        <div className="card space-y-5 border-2 shrink-0 w-full max-w-sm shadow-xl bg-base-100">
          <h3 className="text-center text-3xl font-bold">Sign Up</h3>
          <form onSubmit={handlerRegister} className=" pb-0 card-body ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn-coustom hover:text-black hover:border-slate-300">
                Sign UP
              </button>
            </div>
          </form>
          <p className="text-center  label-text">Or Sign Up With</p>
          <div className="flex justify-center gap-5 items-center">
            <button className="p-3 bg-slate-100 text-blue-900 rounded-full">
              <FaFacebook></FaFacebook>
            </button>
            <button className="p-3 bg-slate-100 text-blue-500 rounded-full">
              <FaLinkedin></FaLinkedin>
            </button>
            <button
              onClick={handlerGoogleLogin}
              className="p-3 bg-slate-100 text-white rounded-full"
            >
              <img className="w-5 h-5 rounded-full" src={google} alt="" />
            </button>
          </div>
          <p className="text-center pb-5 label-text">
            Already have an account?{' '}
            <Link className="text-[#FF3811]" to="/login">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

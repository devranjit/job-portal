import Lottie from 'react-lottie';
import loginAnimation from '../assets/animaiton.json';  

const Signup = () => {
    const animationOptions = {
        loop: true, 
        autoplay: true,
        animationData: loginAnimation, 
    };

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)


    }

    return (
        <div >
            <form onSubmit={handleRegister} className="mx-auto grid grid-cols-1 lg:flex md:flex sm:flex  justify-center py-52 bg-gray-700" >
            <div className=" border-2 border-gray-500 rounded-lg p-32  w-[40%]">
                <h1 className='text-center text-2xl py-2 text-white'>Sign up</h1>
                <div className="border-2 my-2 rounded-full">
                    <input name='email' className="focus:outline-none w-full py-2 px-4 rounded-full" type="email" placeholder="Your Email" />
                </div>
                <div className="border-2  rounded-full">
                    <input  name='password' className="focus:outline-none w-full py-2 px-4 rounded-full" type="text" placeholder="Your Password" />
                    
                </div>
                <p className='text-white my-0 py-2'>Forget password?</p>
                <div>
                    <button className='w-full bg-blue-400 text-white border border-black  text-center py-2 rounded-full text-xl font-bold uppercase' type='submit'>Sign Up</button>
                </div>
            </div>
            <div>
                <Lottie options={animationOptions} height={400} width={700} />
            </div>
            </form>
           
        </div>
    );
};

export default Signup;

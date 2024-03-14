import ButtonLogin from "../ui/components/button/ButtonHome";

/**
 * Renders a login form with email and password inputs, a submit button, and a link to reset the password.
 * @returns {JSX.Element} The login form component.
 */
const Login = () => {
    return (
        <div className="h-screen w-full bg-cover relative">
            <div className="absolute inset-0" style={{ backgroundImage: "url('/images/Image_Header1_49d601fa4c.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div className="absolute inset-0 bg-[#08215C] opacity-80"></div>
            <div className="h-full flex items-center justify-center">
                <div className="w-full">
                    <div className="flex flex-col hover:blur-0 bg-center bg-cover items-center justify-center w-full gap-5 relative z-10">
                        <h1 className="my-6">
                            <img src='/images/incoBLanco.svg' alt="Logo" />
                        </h1>
                        <ul className="inline-flex items-center text-xl gap-10">
                            {/* List Items */}
                        </ul>
                        <p className="text-white text-right">or use email your account</p>
                        <input
                            type="email"
                            className="bg-white/50 hover:bg-white md:bg-white placeholder:text-violet-500 placeholder:text-sm text-violet-500 py-3 px-5 focus:text-violet-500 focus:outline focus:outline-offset-1 focus:outline-violet-500 rounded-md"
                            placeholder="Enter Your Email Here!"
                        />
                        <input
                            type="password"
                            className="bg-white/50 hover:bg-white md:bg-white placeholder:text-violet-500 placeholder:text-sm text-violet-500 py-3 px-5 focus:text-violet-500 focus:outline focus:outline-offset-1 focus:outline-violet-500 rounded-md"
                            placeholder="Enter Your Password Here!"
                        />
                        <div className="text-right">
                            <a
                                href=""
                                className="italic text-white/50 text-sm underline decoration-violet-500 text-violet-500 hover:text-white transition"
                            >
                                Forget your Password?
                            </a>
                        </div>
                        <ButtonLogin text="Enviar" href="/dashboard" className="bg-[#007AFF]"/>
                       
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Login
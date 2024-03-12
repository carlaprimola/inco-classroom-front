const Login = () => {
    return (
        <div>
        <div className="h-screen w-full bg-cover" style={{backgroundImage: "url('/images/Image_Header1_49d601fa4c.jpg')"}}>
        <div className="h-full w-full flex items-center justify-center">
        <div className="h-full w-full">
          <div className="flex flex-col hover:blur-0 h-full bg-center bg-cover bg-[#08215C] items-center justify-center w-full gap-5 opacity-90">
            <h1 className="my-6">
              <img src='/images/incoBLanco.svg' />
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
                className="italic text-white/50 text-sm underline decoration-violet-500 text-violet-500 hover:text-white  transition"
              >
                Forget your Password?
              </a>
            </div>
            <button
              className="px-6 py-2 bg-violet-500 rounded hover:bg-white hover:text-violet-700 font-semibold transition-all text-white hover:scale-110"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>           
    </div>
    )
}

export default Login
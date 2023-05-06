export default function SignUpPage() {
  return (
    <div className="font-acumin main-container ">
      <div className="wrapper-container grid grid-cols-2 max-h-screen overflow-hidden">
        {/* 1. IMAGE CONTAINER */}
        <div className="main-img-container bg-back">
          <div className="logo-div flex mx-20 my-4">
            <img
              src="/assets/illustrations/search (4).png"
              alt="logo"
              width="40px"
              height="40px"
            />
            <p className="text-2xl text-text-blue">medProbe</p>
          </div>
          <img
            src="/assets/illustrations/lady-searching.svg"
            alt="sign up image"
          />
        </div>

        {/* 2. FORM CONTAINER */}
        <div className="main-form-container my-40 mx-44 border-4 w-3/5">
          <div className="">
            <div className="flex flex-col items-center">
              <h1 className="text-4xl font-extrabold text-medium-blue">
                Welcome Back!
              </h1>
              <p className="text-text-grey text-center">
                To stay connected with us, please login with your personal info.
              </p>
            </div>

            {/* 3. MAIN FORM  */}
            <form className="flex flex-col my-20 border-4">
              <span className="block text-sm font-medium text-slate-700 ">
                Email
              </span>
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="mt-1 block w-full my-4 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              />

              <span className="block text-sm font-medium text-slate-700 ">
                Password
              </span>
              <input
                type="password"
                required
                className="mt-1 my-4 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500
          "
              />

              <div className="flex justify-between gap-10 items-center">
                <div>
                  <input type="checkbox" id="checkbox" />
                  <label>I agree to the terms and conditions</label>
                </div>
                <button className="rounded-md bg-medium-blue py-3 px-6 text-white text-sm flex items-center">
                  Sign In
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 15L10 10L6 5"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              <p className="">Forgot password?</p>
              <p>Connect with social Account</p>
              <div className="social-media-icons flex flex-col-3 gap-10">
                <p>Google</p>
                <p>Apple</p>
                <p>GitHub</p>
              </div>
              <button>Register here</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

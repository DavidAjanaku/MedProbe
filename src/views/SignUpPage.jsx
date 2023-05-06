export default function SignUpPage() {
  return (
    <div className="font-acumin main-container ">
      <div className="wrapper-container grid grid-cols-1    overflow-hidden  md:grid-cols-2">
        {/* 1. IMAGE CONTAINER */}
        <div className="main-img-container bg-back hidden md:block">
          <div className="logo-div flex mx-20 my-4">
            <img
              src="/assets/illustrations/search (4).png"
              alt="logo"
              width="30px"
              height="30px"
            />
            <p className="text-2xl text-text-blue">medProbe</p>
          </div>
          <img
            src="/assets/illustrations/man-searching.svg"
            alt="sign up image"
          />
        </div>

        {/* 2. FORM CONTAINER */}
        <div className="main-form-container  my-12 mx-auto  w-4/5  md:w-3/5">
          <div className="">
            <div className="flex flex-col items-center  text-center">
              <h1 className="text-4xl font-extrabold text-medium-blue">
                Welcome New User!
              </h1>
              <p className="text-text-grey text-center">
                To stay connected with us, please sign up with your personal
                info.
              </p>
            </div>

            {/* 3. MAIN FORM  */}
            <form className="flex flex-col my-2 ">
              <span className="block text-sm font-medium text-medium-blue ">
                First Name
              </span>
              <input
                type="text"
                required
                placeholder="Your First Name"
                className="mt-1 block w-full h-12 my-2 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              />
              <span className="block text-sm font-medium text-medium-blue ">
                Last Name
              </span>
              <input
                type="text"
                required
                placeholder="Your Last Name"
                className="mt-1 block w-full h-12 my-2 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              />
              <span className="block text-sm font-medium text-medium-blue ">
                Email
              </span>
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="mt-1 block w-full h-12 my-2 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              />

              <span className="block text-sm font-medium  text-medium-blue ">
                Password
              </span>
              <input
                type="password"
                required
                className="mt-1 my-2 h-12 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500
          "
              />
              <span className="block text-sm font-medium  text-medium-blue ">
                Confirm Password
              </span>
              <input
                type="password"
                required
                className="mt-1 my-2 h-12 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500
          "
              />

              <div className="flex justify-between  flex-wrap  items-center">
                <div>
                  <input type="checkbox" id="checkbox" />
                  <label>I agree to the terms and conditions</label>
                </div>
                <button className="rounded-md bg-medium-blue py-3 px-5 text-white text-sm flex items-center my-4  w-32">
                  Sign Up!
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

              <p className="text-text-grey text-center text-sm my-2">
                Connect with social account
              </p>

              <div className="social-media-icons my-4 flex justify-center gap-14">
                <img
                  src="/public/assets/illustrations/googleIcon.png"
                  alt="google"
                  width="20px"
                  height="20px"
                />
                <img
                  src="/public/assets/illustrations/appleLogo.png"
                  alt="apple"
                  width="20px"
                  height="20px"
                />
                <img
                  src="/public/assets/illustrations/facebookLogo2.png"
                  alt="facebook"
                  width="20px"
                  height="20px"
                />
              </div>

              <button className="border-2 text-sm py-3  rounded-lg border-black">
                Already have an account? Log in.
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

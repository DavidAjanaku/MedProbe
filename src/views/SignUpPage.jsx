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
        <div className="main-form-container my-44">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-extrabold text-medium-blue">
              Welcome Back!
            </h1>
            <p className="text-text-grey">
              To stay connected with us, please login with your personal info.
            </p>
          </div>
          <form className="flex flex-col items-center my-20">
            <input type="email" placeholder="Email" required />
            <label>Email</label>

            <input type="password" placeholder="Password" required />
            <label>Password</label>

            <div className="flex justify-between gap-10">
              <div>
                <input type="checkbox" id="checkbox" />
                <label>I agree to the terms and conditions</label>
              </div>
              <button>Sign In</button>
            </div>

            <p>Forgot password?</p>
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
  );
}

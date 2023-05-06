export default function SignUpPage() {
  return (
    <div className="font-acumin main-container ">
      <div className="wrapper-container grid grid-cols-2 max-h-screen overflow-hidden">
        <div className="main-img-container bg-">
          <div className="logo-div flex mx-20 my-4">
            <img
              src="/public/assets/illustrations/search (4).png"
              alt="logo"
              width="40px"
              height="40px"
            />
            <p className="text-2xl text-text-blue">medProbe</p>
          </div>
          <img
            src="/public/assets/illustrations/lady-searching.svg"
            alt="sign up image"
          />
        </div>

        <div className="main-form-container">
          <p>Form comes here</p>
        </div>
      </div>
    </div>
  );
}

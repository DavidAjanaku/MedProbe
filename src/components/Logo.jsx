const Logo = () => {
  return (
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
      <img src="/assets/illustrations/man-searching.svg" alt="sign up image" />
    </div>
  );
};

export default Logo;

export default function SearchSection() {
  return (
    <>
      <div className="main-img-container bg-back  md:block">
      <div className="logo-div flex mx-20 my-4  justify-center">
        <img
          src="/assets/illustrations/search (4).png"
          alt="logo"
          width="30px"
          height="30px"
        />
        <p className="text-2xl text-text-blue">medProbe</p>
      </div>
      {/* <img src="/assets/illustrations/man-searching.svg" alt="sign up image" /> */}
    </div>
    </>
  );
}

// I CREATED A LOGO COMPONENT, YOU CAN MODIFY THE LOGO THERE WITH THIS CODE TO ADD THE BLUE BACKGROUND AROUND THE "MED" PART, THEN THE MAGNIFYING GLASS IS ALREADY BESIDE medProbe
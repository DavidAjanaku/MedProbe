// import user from "/Users/user/Desktop/med-probe/public/assets/illustrations/profile pic boy.svg";


export default function Card() {
  return (
    <>
    <div className="card-wrapper  ">
        <div className="card-contents  text-center  my-bg-class  w-56 rounded-md cursor-pointer">
        <div className="card-container__contents p-4">

            <div className="card-contents__header mb-4">
           <img src="/public/assets/illustrations/appleLogo.png" alt="user" className='w-10 m-auto'/>
            </div>
            {/* done */}
            <div className="card-contents__texts  text-white  ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eum 
            </div>
        </div>
        </div>
    </div>
    </>
  )
}

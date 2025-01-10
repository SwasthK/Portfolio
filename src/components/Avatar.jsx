import React, { use } from "react";

export const AvatarComponent = () => {
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {console.log(show)}, [show]);
  return (
    <>
      <img
        onClick={() => setShow(true)}
        src="https://res.cloudinary.com/dvpaztqr9/image/upload/f_auto,q_auto/v1/Profile/oekzfujgxvm9tnecyo0v"
        alt="Profile"
        class=" h-16 w-16 sm:h-20 sm:w-20 object-cover object-center rounded-full cursor-pointer animated-text-100"
      />
      {show && (
        <div
          class="fixed top-0 left-0 h-screen w-screen bg-black/70 bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setShow(false)}
        >
          <img
            src="https://res.cloudinary.com/dvpaztqr9/image/upload/f_auto,q_auto/v1/Profile/oekzfujgxvm9tnecyo0v"
            alt="Profile"
            class="sm:h-64 sm:w-64 h-56 w-56  object-cover object-center rounded-full mb-24 transition-transform animated-text-100"
          />
        </div>
      )}
    </>
  );
};

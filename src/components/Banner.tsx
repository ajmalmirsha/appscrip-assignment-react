import Button from "./Button"

export default function Banner() {
  return (
    <div className="banner">
      <div className="content">
        <h1>A Creator's Paradise</h1>
        <h2>Were Creativity Meets Success</h2>
      </div>
      <div className="from-sec">
        <form>
          <div className="google-auth-sec">
            <label className="google-btn" htmlFor="">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu1PJmT_THldF0n5APcmt9p10utgu6KSw4cH2fQ5Xhpw&s"
                alt=""
              />
              Continue With Google
            </label>
          </div>

          <div className="input-sec">
            <hr className="diff-line" />
            <div className="name-sec">
              <div className="input-wrapper">
                <input
                  className="input-field"
                  type="text"
                  placeholder="First Name*"
                />
              </div>
              <div className="input-wrapper">
                <input
                  className="input-field"
                  type="text"
                  placeholder="Last Name*"
                />
              </div>
            </div>
            <div className="input-wrapper">
              <input type="text" className="input-field" placeholder="Email*" />
            </div>
            <div className="input-wrapper">
              <input
                type="password"
                className="input-field"
                placeholder="Password*"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 576 512"
                className="eye-icon"
              >
                <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
              </svg>
            </div>
            <div className="time-content">
              <div className="small-text" >(GMT+05:30) india standard Time - Calcutta</div>
            </div>
            <Button className="user-btn" content="Signup as a user" />
            <div className="text-wrapper">
              <p className="small-text" >By signing up you agree to our Terms & Conditions and Privacy Policy. and confirm that you are at least 18 years old.</p>
            </div>
            <hr className="or-line" />
            <Button className="user-btn" content="Signup as a creator" />
            <p className="small-text" >Already have an account? <a href="">Login</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}

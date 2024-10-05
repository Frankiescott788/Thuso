import { Button, Image } from "@nextui-org/react";
import { NavLink, Outlet } from "react-router-dom";
import Logo from "../Assets/pictures/Screenshot from 2024-10-05 15-07-52.png";

const Navbar = () => {
  return (
    <>
      <nav className="fixed right-0 top-0 left-0">
        <div className="flex justify-between px-3 py-3">
          <div className="logo">
            <Image src={Logo} className="h-[3rem]" />
          </div>
          <div className="flex gap-5 mt-1">
            <ul className="flex gap-5 mt-2">
              <li>
                {" "}
                <NavLink to="/"> Home </NavLink>{" "}
              </li>
              <li><NavLink to="/solutions"> Solutions </NavLink></li>
              <li>Features</li>
              <li>Resources</li>
              <li>Blog</li>
            </ul>
            <div>
              <Button className="px-[20pt] bg-[#0496ff] shadow-shadowed_btn text-white rounded-full">
                <div className="flex gap-2">
                  <p>See Demo</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={20}
                    height={20}
                    color={"#ffffff"}
                    fill={"none"}
                  >
                    <path
                      d="M14.4531 12.8948C14.3016 13.5215 13.5857 13.9644 12.1539 14.8502C10.7697 15.7064 10.0777 16.1346 9.51993 15.9625C9.28934 15.8913 9.07925 15.7562 8.90982 15.57C8.5 15.1198 8.5 14.2465 8.5 12.5C8.5 10.7535 8.5 9.88018 8.90982 9.42995C9.07925 9.24381 9.28934 9.10868 9.51993 9.03753C10.0777 8.86544 10.7697 9.29357 12.1539 10.1498C13.5857 11.0356 14.3016 11.4785 14.4531 12.1052C14.5156 12.3639 14.5156 12.6361 14.4531 12.8948Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20.9977 11C21 11.4701 21 11.9693 21 12.5C21 16.9783 21 19.2175 19.6088 20.6088C18.2175 22 15.9783 22 11.5 22C7.02166 22 4.78249 22 3.39124 20.6088C2 19.2175 2 16.9783 2 12.5C2 8.02166 2 5.78249 3.39124 4.39124C4.78249 3 7.02166 3 11.5 3C12.0307 3 12.5299 3 13 3.00231"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M18.5 2L18.7579 2.69703C19.0961 3.61102 19.2652 4.06802 19.5986 4.40139C19.932 4.73477 20.389 4.90387 21.303 5.24208L22 5.5L21.303 5.75792C20.389 6.09613 19.932 6.26524 19.5986 6.59861C19.2652 6.93198 19.0961 7.38898 18.7579 8.30297L18.5 9L18.2421 8.30297C17.9039 7.38898 17.7348 6.93198 17.4014 6.59861C17.068 6.26524 16.611 6.09613 15.697 5.75792L15 5.5L15.697 5.24208C16.611 4.90387 17.068 4.73477 17.4014 4.40139C17.7348 4.06802 17.9039 3.61102 18.2421 2.69703L18.5 2Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </nav>
      {<Outlet />}
    </>
  );
};

export default Navbar;

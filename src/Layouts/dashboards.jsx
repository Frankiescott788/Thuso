import { Avatar, Badge, Divider } from "@nextui-org/react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const Dashboard_layout = () => {

  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <aside className="fixed top-0  bottom-0 left-0 grid grid-cols-12">
        <div className="col-span-6 border-r px-1 ">
          <div>Logo here</div>
          <ul className="aside-nav mt-14">
            <li className={` cursor-pointer flex gap-1 pr-[5rem] pl-3 py-2 rounded ${ pathname === '/dashboard/' ? "bg-[#0496ff] text-white" : ''} text-gray-400 `} onClick={() => navigate('/dashboard/')}>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  color={`${ pathname === '/dashboard/' ? "white" : "#9ca3af"} text-gray-400 `}
                  fill={"none"}
                >
                  <path
                    d="M2 18C2 16.4596 2 15.6893 2.34673 15.1235C2.54074 14.8069 2.80693 14.5407 3.12353 14.3467C3.68934 14 4.45956 14 6 14C7.54044 14 8.31066 14 8.87647 14.3467C9.19307 14.5407 9.45926 14.8069 9.65327 15.1235C10 15.6893 10 16.4596 10 18C10 19.5404 10 20.3107 9.65327 20.8765C9.45926 21.1931 9.19307 21.4593 8.87647 21.6533C8.31066 22 7.54044 22 6 22C4.45956 22 3.68934 22 3.12353 21.6533C2.80693 21.4593 2.54074 21.1931 2.34673 20.8765C2 20.3107 2 19.5404 2 18Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M14 18C14 16.4596 14 15.6893 14.3467 15.1235C14.5407 14.8069 14.8069 14.5407 15.1235 14.3467C15.6893 14 16.4596 14 18 14C19.5404 14 20.3107 14 20.8765 14.3467C21.1931 14.5407 21.4593 14.8069 21.6533 15.1235C22 15.6893 22 16.4596 22 18C22 19.5404 22 20.3107 21.6533 20.8765C21.4593 21.1931 21.1931 21.4593 20.8765 21.6533C20.3107 22 19.5404 22 18 22C16.4596 22 15.6893 22 15.1235 21.6533C14.8069 21.4593 14.5407 21.1931 14.3467 20.8765C14 20.3107 14 19.5404 14 18Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M2 6C2 4.45956 2 3.68934 2.34673 3.12353C2.54074 2.80693 2.80693 2.54074 3.12353 2.34673C3.68934 2 4.45956 2 6 2C7.54044 2 8.31066 2 8.87647 2.34673C9.19307 2.54074 9.45926 2.80693 9.65327 3.12353C10 3.68934 10 4.45956 10 6C10 7.54044 10 8.31066 9.65327 8.87647C9.45926 9.19307 9.19307 9.45926 8.87647 9.65327C8.31066 10 7.54044 10 6 10C4.45956 10 3.68934 10 3.12353 9.65327C2.80693 9.45926 2.54074 9.19307 2.34673 8.87647C2 8.31066 2 7.54044 2 6Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M14 6C14 4.45956 14 3.68934 14.3467 3.12353C14.5407 2.80693 14.8069 2.54074 15.1235 2.34673C15.6893 2 16.4596 2 18 2C19.5404 2 20.3107 2 20.8765 2.34673C21.1931 2.54074 21.4593 2.80693 21.6533 3.12353C22 3.68934 22 4.45956 22 6C22 7.54044 22 8.31066 21.6533 8.87647C21.4593 9.19307 21.1931 9.45926 20.8765 9.65327C20.3107 10 19.5404 10 18 10C16.4596 10 15.6893 10 15.1235 9.65327C14.8069 9.45926 14.5407 9.19307 14.3467 8.87647C14 8.31066 14 7.54044 14 6Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <div>Overview</div>
            </li>

            <li className={` cursor-pointer flex gap-1 pr-[5rem] pl-3 py-2 rounded ${ pathname === '/dashboard/users' ? "bg-[#0496ff] text-white" : ''} text-gray-400 `} onClick={() => navigate('/dashboard/users')}>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  color={`${ pathname === '/dashboard/users' ? "white" : "#9ca3af"} text-gray-400 `}
                  fill={"none"}
                >
                  <path
                    d="M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M15 11C17.2091 11 19 9.20914 19 7C19 4.79086 17.2091 3 15 3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11 14H7C4.23858 14 2 16.2386 2 19C2 20.1046 2.89543 21 4 21H14C15.1046 21 16 20.1046 16 19C16 16.2386 13.7614 14 11 14Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17 14C19.7614 14 22 16.2386 22 19C22 20.1046 21.1046 21 20 21H18.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>Users</div>
            </li>

            <li className={` cursor-pointer flex gap-1 pr-[5rem] pl-3 py-2 rounded ${ pathname === '/dashboard/detections' ? "bg-[#0496ff] text-white" : ''} text-gray-400 `} onClick={() => navigate('/dashboard/detections')}>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  color={`${ pathname === '/dashboard/users' ? "white" : "#9ca3af"} text-gray-400 `}
                  fill={"none"}
                >
                  <path
                    d="M7 17L7 13"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M12 17L12 7"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M17 17L17 11"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>Data Detection</div>
            </li>

            <li className={` cursor-pointer flex gap-1 pr-[5rem] pl-3 py-2 rounded ${ pathname === '/dashboard/metrics' ? "bg-[#0496ff] text-white" : ''} text-gray-400 `} onClick={() => navigate('/dashboard/metrics')}>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  color={`${ pathname === '/dashboard/metrics' ? "white" : "#9ca3af"} text-gray-400 `}
                  fill={"none"}
                >
                  <path
                    d="M21 21H10C6.70017 21 5.05025 21 4.02513 19.9749C3 18.9497 3 17.2998 3 14V3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M5 20C5.43938 16.8438 7.67642 8.7643 10.4282 8.7643C12.3301 8.7643 12.8226 12.6353 14.6864 12.6353C17.8931 12.6353 17.4282 4 21 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>Bot Metrics</div>
            </li>
            <li className={` cursor-pointer flex gap-1 pr-[5rem] pl-3 py-2 rounded ${ pathname === '/dashboard/firmware' ? "bg-[#0496ff] text-white" : ''} text-gray-400 `} onClick={() => navigate('/dashboard/firmware')}>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  color={`${ pathname === '/dashboard/firmware' ? "white" : "#9ca3af"} text-gray-400 `}
                  fill={"none"}
                >
                  <path
                    d="M15 10.5C15 12.1569 13.6569 13.5 12 13.5C10.3431 13.5 9 12.1569 9 10.5C9 8.84315 10.3431 7.5 12 7.5C13.6569 7.5 15 8.84315 15 10.5Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M20.0135 12.4033C20.5394 12.2452 20.8024 12.1661 20.9012 12.0333C21 11.9005 21 11.6869 21 11.2598V9.74026C21 9.31314 21 9.09958 20.9012 8.96675C20.8024 8.83391 20.5394 8.75489 20.0135 8.59685C18.3506 8.09719 17.3091 6.37249 17.6827 4.70382C17.8059 4.15339 17.8675 3.87817 17.8004 3.72712C17.7332 3.57607 17.5457 3.47025 17.1708 3.2586L15.7951 2.48211C15.4293 2.27562 15.2464 2.17238 15.0838 2.19187C14.9212 2.21135 14.7244 2.39553 14.3308 2.7639C13.0349 3.97689 10.9665 3.97684 9.67058 2.76382C9.27705 2.39545 9.08028 2.21127 8.91765 2.19178C8.75503 2.17229 8.57212 2.27554 8.2063 2.48202L6.83064 3.25851C6.4557 3.47015 6.26823 3.57596 6.20108 3.72699C6.13392 3.87802 6.1955 4.15326 6.31867 4.70375C6.69204 6.37248 5.64975 8.09724 3.98655 8.59687C3.46058 8.75487 3.1976 8.83387 3.0988 8.96671C3 9.09955 3 9.31312 3 9.74026V11.2598C3 11.6869 3 11.9005 3.09879 12.0333C3.19758 12.1662 3.46057 12.2452 3.98655 12.4032C5.64944 12.9029 6.69091 14.6276 6.31731 16.2963C6.19408 16.8467 6.13246 17.1219 6.19961 17.273C6.26677 17.424 6.45425 17.5298 6.82921 17.7415L8.20487 18.518C8.57072 18.7245 8.75364 18.8277 8.91629 18.8082C9.07893 18.7887 9.27566 18.6045 9.66911 18.2361C10.9657 17.0221 13.0357 17.022 14.3323 18.2361C14.7258 18.6044 14.9225 18.7886 15.0851 18.8081C15.2478 18.8276 15.4307 18.7244 15.7965 18.5179L17.1722 17.7414C17.5472 17.5297 17.7347 17.4239 17.8018 17.2728C17.869 17.1218 17.8073 16.8466 17.684 16.2962C17.3102 14.6276 18.3509 12.9029 20.0135 12.4033Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M22 18C22 18.93 22 19.395 21.8978 19.7765C21.6204 20.8117 20.8117 21.6204 19.7765 21.8978C19.395 22 18.93 22 18 22H6C5.07003 22 4.60504 22 4.22354 21.8978C3.18827 21.6204 2.37962 20.8117 2.10222 19.7765C2 19.395 2 18.93 2 18"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div>Firmware</div>
            </li>
          </ul>
        </div>
      </aside>
      <nav className="fixed top-0 right-0 left-0 border-b ms-[15.5rem] py-4 px-3">
        <div className="flex justify-between">
          <div>
            <p className="mt-1 text-gray-400">Dashboard</p>
          </div>
          <div className="flex gap-3">
            <div className="flex gap-5">
              <Badge content="4" className="bg-blue-500 text-white">
                <button className="mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                    color={"#9ca3af"}
                    fill={"none"}
                  >
                    <path
                      d="M5.15837 11.491C5.08489 12.887 5.16936 14.373 3.92213 15.3084C3.34164 15.7438 3 16.427 3 17.1527C3 18.1508 3.7818 19 4.8 19H19.2C20.2182 19 21 18.1508 21 17.1527C21 16.427 20.6584 15.7438 20.0779 15.3084C18.8306 14.373 18.9151 12.887 18.8416 11.491C18.6501 7.85223 15.6438 5 12 5C8.35617 5 5.34988 7.85222 5.15837 11.491Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.5 3.125C10.5 3.95343 11.1716 5 12 5C12.8284 5 13.5 3.95343 13.5 3.125C13.5 2.29657 12.8284 2 12 2C11.1716 2 10.5 2.29657 10.5 3.125Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M15 19C15 20.6569 13.6569 22 12 22C10.3431 22 9 20.6569 9 19"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </Badge>
              <button className="mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  color={"#9ca3af"}
                  fill={"none"}
                >
                  <path
                    d="M21.3175 7.14139L20.8239 6.28479C20.4506 5.63696 20.264 5.31305 19.9464 5.18388C19.6288 5.05472 19.2696 5.15664 18.5513 5.36048L17.3311 5.70418C16.8725 5.80994 16.3913 5.74994 15.9726 5.53479L15.6357 5.34042C15.2766 5.11043 15.0004 4.77133 14.8475 4.37274L14.5136 3.37536C14.294 2.71534 14.1842 2.38533 13.9228 2.19657C13.6615 2.00781 13.3143 2.00781 12.6199 2.00781H11.5051C10.8108 2.00781 10.4636 2.00781 10.2022 2.19657C9.94085 2.38533 9.83106 2.71534 9.61149 3.37536L9.27753 4.37274C9.12465 4.77133 8.84845 5.11043 8.48937 5.34042L8.15249 5.53479C7.73374 5.74994 7.25259 5.80994 6.79398 5.70418L5.57375 5.36048C4.85541 5.15664 4.49625 5.05472 4.17867 5.18388C3.86109 5.31305 3.67445 5.63696 3.30115 6.28479L2.80757 7.14139C2.45766 7.74864 2.2827 8.05227 2.31666 8.37549C2.35061 8.69871 2.58483 8.95918 3.05326 9.48012L4.0843 10.6328C4.3363 10.9518 4.51521 11.5078 4.51521 12.0077C4.51521 12.5078 4.33636 13.0636 4.08433 13.3827L3.05326 14.5354C2.58483 15.0564 2.35062 15.3168 2.31666 15.6401C2.2827 15.9633 2.45766 16.2669 2.80757 16.8741L3.30114 17.7307C3.67443 18.3785 3.86109 18.7025 4.17867 18.8316C4.49625 18.9608 4.85542 18.8589 5.57377 18.655L6.79394 18.3113C7.25263 18.2055 7.73387 18.2656 8.15267 18.4808L8.4895 18.6752C8.84851 18.9052 9.12464 19.2442 9.2775 19.6428L9.61149 20.6403C9.83106 21.3003 9.94085 21.6303 10.2022 21.8191C10.4636 22.0078 10.8108 22.0078 11.5051 22.0078H12.6199C13.3143 22.0078 13.6615 22.0078 13.9228 21.8191C14.1842 21.6303 14.294 21.3003 14.5136 20.6403L14.8476 19.6428C15.0004 19.2442 15.2765 18.9052 15.6356 18.6752L15.9724 18.4808C16.3912 18.2656 16.8724 18.2055 17.3311 18.3113L18.5513 18.655C19.2696 18.8589 19.6288 18.9608 19.9464 18.8316C20.264 18.7025 20.4506 18.3785 20.8239 17.7307L21.3175 16.8741C21.6674 16.2669 21.8423 15.9633 21.8084 15.6401C21.7744 15.3168 21.5402 15.0564 21.0718 14.5354L20.0407 13.3827C19.7887 13.0636 19.6098 12.5078 19.6098 12.0077C19.6098 11.5078 19.7888 10.9518 20.0407 10.6328L21.0718 9.48012C21.5402 8.95918 21.7744 8.69871 21.8084 8.37549C21.8423 8.05227 21.6674 7.74864 21.3175 7.14139Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M15.5195 12C15.5195 13.933 13.9525 15.5 12.0195 15.5C10.0865 15.5 8.51953 13.933 8.51953 12C8.51953 10.067 10.0865 8.5 12.0195 8.5C13.9525 8.5 15.5195 10.067 15.5195 12Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </button>
            </div>
            <div className="flex gap-4">
              <Divider orientation="vertical" />
              <Avatar isBordered size="sm" />
            </div>
          </div>
        </div>
      </nav>
      <main className="ms-[17rem] mt-[15dvh]">{<Outlet />}</main>
    </>
  );
};

export default Dashboard_layout;

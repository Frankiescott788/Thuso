import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
  Input,
} from "@nextui-org/react";
import { useState } from "react";
import { users } from "../../../data/users";

const Users = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter users based on search query
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section>
      <div className="mb-2 flex justify-between">
        <div>
          <p className="text-2xl">
            Our <span className="text-[#0496ff]">Bot</span> Users
          </p>
          <p className="text-small text-gray-400">
            Harnessing Technology to Enhance Daily Operations
          </p>
        </div>
        <div>
          <Input
            type="search"
            className="w-[17rem] me-5"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // Update search query
            startContent={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={16}
                height={16}
                color={"#9ca3af"}
                fill={"none"}
              >
                <path
                  d="M17.5 17.5L22 22"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
            }
          />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-5">
        {filteredUsers.map((user) => (
          <Card key={user.id} className="col-span-4">
            <CardHeader className="justify-between">
              <div className="flex gap-5">
                <Avatar isBordered radius="full" size="md" />
                <div className="flex flex-col gap-1 items-start justify-center">
                  <h4 className="text-small font-semibold leading-none text-default-600">
                    {user.name}
                  </h4>
                  <h5
                    className={`rounded-full text-tiny px-2 text-default-400 ${
                      user.availability === "online"
                        ? "bg-success-100 text-success-400"
                        : "bg-danger-100 text-danger-400"
                    }`}
                  >
                    {user.availability}
                  </h5>
                </div>
              </div>
            </CardHeader>
            <CardBody className="px-3 py-0 text-small text-default-400 overflow-hidden">
              <span className="pt-2 flex gap-1">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={16}
                    height={16}
                    color={"#9ca3af"}
                    fill={"none"}
                  >
                    <path
                      d="M13.6177 21.367C13.1841 21.773 12.6044 22 12.0011 22C11.3978 22 10.8182 21.773 10.3845 21.367C6.41302 17.626 1.09076 13.4469 3.68627 7.37966C5.08963 4.09916 8.45834 2 12.0011 2C15.5439 2 18.9126 4.09916 20.316 7.37966C22.9082 13.4393 17.599 17.6389 13.6177 21.367Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M15.5 11C15.5 12.933 13.933 14.5 12 14.5C10.067 14.5 8.5 12.933 8.5 11C8.5 9.067 10.067 7.5 12 7.5C13.933 7.5 15.5 9.067 15.5 11Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <div className="text-tiny">{user.location}</div>
              </span>
              <span className="pt-2 flex gap-1">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={16}
                    height={16}
                    color={"#9ca3af"}
                    fill={"none"}
                  >
                    <path
                      d="M13.5 6.5C13.5 7.32843 12.8284 8 12 8C11.1716 8 10.5 7.32843 10.5 6.5C10.5 5.67157 11.1716 5 12 5C12.8284 5 13.5 5.67157 13.5 6.5Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M13.5 12.5C13.5 13.3284 12.8284 14 12 14C11.1716 14 10.5 13.3284 10.5 12.5C10.5 11.6716 11.1716 11 12 11C12.8284 11 13.5 11.6716 13.5 12.5Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M12 17C10.1308 17 9.19615 17 8.5 16.5981C8.04394 16.3348 7.66523 15.9561 7.40192 15.5C7 14.8038 7 13.8692 7 12L7 7C7 5.13077 7 4.19615 7.40192 3.5C7.66523 3.04394 8.04394 2.66523 8.5 2.40192C9.19615 2 10.1308 2 12 2C13.8692 2 14.8038 2 15.5 2.40192C15.9561 2.66523 16.3348 3.04394 16.5981 3.5C17 4.19615 17 5.13077 17 7V12C17 13.8692 17 14.8038 16.5981 15.5C16.3348 15.9561 15.9561 16.3348 15.5 16.5981C14.8038 17 13.8692 17 12 17Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M12 17V22"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 8L5.95617 7.12348C4.64147 6.0195 3.98413 5.46751 4.00029 4.96618C4.00686 4.76236 4.07264 4.56553 4.18881 4.40207C4.47455 4 5.31637 4 7 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17 8L18.0438 7.12348C19.3585 6.0195 20.0159 5.46751 19.9997 4.96618C19.9931 4.76236 19.9274 4.56553 19.8112 4.40207C19.5255 4 18.6836 4 17 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="text-tiny">{user.successRate}</div>
              </span>
            </CardBody>
            <CardFooter className="pt-2">
              <Button color="default" radius="full">
                View Profile
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Users;

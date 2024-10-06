import {
  Card,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@nextui-org/react";
import Linechart from "../chartjs/chart";
import DoughnutChart from "../chartjs/users";
import { users, Users } from "../../data/users";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Overview = () => {
  const [time, setTime] = useState('');
  const active_users = users.filter(user => user.availability === 'online');
  const navigate = useNavigate();

  useEffect(() => {
    let hours = new Date().getHours();
    setTime(hours);
  }, []);

  return (
    <section>
      <div>
        <div className="pb-8 flex justify-between">
          <div>
            <p className="text-2xl greeting-text">{time < 12 ? 'Good Morning' : time < 17 ? 'Good Day' : 'Good Evening'}, Frankie</p>
            <p className="text-tiny text-gray-400">Dashboard overview</p>
          </div>
          <div className="me-[5rem] border-success-400 pt-4 px-[2rem] rounded-md bg-success-50">
            <div className="flex gap-1">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={20}
                  height={20}
                  color={"#34D399"}
                  fill={"none"}
                >
                  <path
                    d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M8 12.5L10.5 15L16 9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm text-success-400">No critical alerts yet</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-5">
          <Card className="col-span-3 border shadow-md">
            <div className="flex justify-between px-2 py-4">
              <div>
                <p className="text-gray-400">Total Users</p>
                <div className="flex">
                  <p className="text-2xl">{users.length}</p>
                  <p className="ms-[5rem] text-sm mt-2 text-success-400 font-bold">
                    08%
                  </p>
                </div>
              </div>
              <div className="mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={28}
                  height={28}
                  color={"#7161ef"}
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
            </div>
          </Card>
          <Card className="col-span-3 border shadow-md">
            <div className="flex justify-between px-2 py-4">
              <div>
                <p className="text-gray-400">Active users</p>
                <div className="flex">
                  <p className="text-2xl">{active_users.length}</p>
                  <p className="ms-[5rem] text-sm mt-2 text-success-400 font-bold">
                    08%
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={28}
                  height={28}
                  color={"#affc41"}
                  fill={"none"}
                >
                  <path
                    d="M5.18007 15.2964C3.92249 16.0335 0.625213 17.5386 2.63348 19.422C3.6145 20.342 4.7071 21 6.08077 21H13.9192C15.2929 21 16.3855 20.342 17.3665 19.422C19.3748 17.5386 16.0775 16.0335 14.8199 15.2964C11.8709 13.5679 8.12906 13.5679 5.18007 15.2964Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 7C14 9.20914 12.2091 11 10 11C7.79086 11 6 9.20914 6 7C6 4.79086 7.79086 3 10 3C12.2091 3 14 4.79086 14 7Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M17 5.71429C17 5.71429 18 6.23573 18.5 7C18.5 7 20 4 22 3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </Card>
          <div className="col-span-10 absolute right-0 me-[5rem] w-[25rem]">
            <div className="flex justify-between mb-2">
              <p className="text-sm mt-2 text-gray-400">User Activity Overview</p>
              <Button
                className="bg-[#0496ff] text-white shadow-shadowed_btn rounded-full"
                size="sm"
                onClick={() => navigate('/dashboard/users')}
              >
                {" "}
                View All{" "}
              </Button>
            </div>
            <Table aria-label="Example static collection table">
              <TableHeader>
                <TableColumn>NAME</TableColumn>
                <TableColumn>STATUS</TableColumn>
              </TableHeader>
              <TableBody>
                {users.slice(0, 9).map((user) => (
                  <TableRow>
                    <TableCell className="text-gray-500">{user.name}</TableCell>
                    <TableCell>
                      <div
                        className={`text-tiny rounded-full ${
                          user.availability === "online"
                            ? "bg-success-100 text-success-400"
                            : "bg-danger-100 text-danger-400"
                        } text-center`}
                      >
                        {user.availability}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-6 shadow-md p-3 mt-5">
            <p className="text-gray-400 mb-4">Service Effectiveness Analysis</p>
            <Linechart />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;

import { Avatar, BreadcrumbItem, Breadcrumbs, Button, Card, CardBody, CardHeader, Image, User } from "@nextui-org/react";

const Hero = () => {
  return (
    <section className="px-[5rem]">
      <div className="mt-[15rem] flex gap-10">
        <div className="">
          <div className="flex py-1 gap-3">
            <p className="text-gray-400">Secure Navigation</p>
            <div className="w-[15rem] h-[2px] bg-gray-100 mt-3"></div>
          </div>
          <div>
            <p className="text-5xl font-bold">
              Guiding the way <br />
              To <span className="text-[#0496ff]">Safer</span> paths
            </p>
            <Card className="w-[20rem] mt-5">
                <CardBody>
                    <div>
                        <User 
                            name="Frankie mosehla"
                            description="23 Sep 2024"
                            avatarProps={
                                { src : 'https://i.pinimg.com/564x/e4/bb/f8/e4bbf8da732e4b32b9c84afa8aee3faa.jpg' }
                            }
                        />
                        <p className="ms-12 text-gray-400 text-sm">Thuso is a great device.</p>
                    </div>
                </CardBody>
            </Card>
          </div>
        </div>
        <div className="flex">
        <div className="grid-cols-12 ">
            <Card className="col-span-6">
                <Image src="https://i.pinimg.com/564x/89/8f/12/898f12789d072d4f0105a144c0a76637.jpg" className="h-[20rem]"/>
                <div className="text-white absolute top-0 z-10 px-2 text-2xl font-semibold">
                    Face recognition and mapping.
                </div>
            </Card>
        </div>
        <div className="grid-cols-12 mb-10 absolute top-0 ms-[18rem] mt-[10rem] z-10">
            <Card className="col-span-6">
                <Image src="https://i.pinimg.com/originals/7c/d5/3d/7cd53d36d121d839da9600ca055b01db.gif" className="h-[18rem]"/>
                <div className="text-white absolute top-0 z-10 px-2 text-2xl font-semibold py-1">
                    Facial Expression detection
                </div>
                <div className="text-white absolute bottom-0 z-10 p-3 ">
                    <p>Models</p>
                    <p className="text-tiny">We use pre-trained models to interpret emotions like happiness</p>
                </div>
            </Card>
            <Card className="col-span-6 p-3 my-3">
                <p className="text-tiny">Blogs</p>
                <p className="text-gray-400">Safe journeys for every step</p>
            </Card>
        </div>
        </div>
        
        </div>
    </section>
  );
};

export default Hero;

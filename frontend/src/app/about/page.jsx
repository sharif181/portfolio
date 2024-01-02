import Image from "next/image";
import AboutMeTab from "@/components/AboutMeTab";

const AboutPage = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-2">
        <div className="flex flex-col justify-center items-center pt-28 pr-20 h-full">
          <Image
            src="/images/sharifkhan.jpg"
            width={400}
            height={400}
            alt="sharif khan"
            className="rounded-3xl"
          />
        </div>
        <div className="pt-28 pr-20">
          <AboutMeTab />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

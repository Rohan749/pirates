import Mint from "../../components/Mint";
import Image from "next/image";
import bg from "../../assets/images/background.svg"

export default function Home() {

  return (
    <>
     <Mint />
     <div className=" w-full h-full overflow-y-hidden z-20">
      <Image src={bg} alt="" className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[110vh] overflow-y-hidden"  />
     </div>
    </>
  );
}

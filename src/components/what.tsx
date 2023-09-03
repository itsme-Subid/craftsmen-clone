import { ServiceIcon } from "@/icons";
import Indicator from "./indicator";

const What = () => {
  return (
    <div className="relative flex flex-col gap-10 rounded-[4.5rem] p-16 px-14 bg-[#1b1b1f] text-[#a5a1ff]">
      <div className="head text-xl font-semibold">WHAT WE DO</div>
      <div className="content text-8xl leading-[110%]">
        We provide clients <br />
        with stunning <em>Crafty</em> web <br /> solutions, developed <br />{" "}
        with <em>skill</em> & <em>passion</em>.
      </div>
      <Indicator icon={ServiceIcon} />
    </div>
  );
};

export default What;

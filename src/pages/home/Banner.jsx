import BannerBg from "../../images/Banner.png";
import TableauDA from "../../images/TableauDA.png";
import AlteryxDesignerCore from "../../images/AlteryxDesignerCore.png";
import Lottie from "lottie-react";
import Hello from "../../images/Hello.json";
import WavingBird from "../../images/WavingBird.json";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className="w-full h-max relative border-t " style={{ height: "24em" }}>
      <img
        src={BannerBg}
        className="absolute w-full h-full object-top object-cover"
      />

      {/* <Lottie
        className="absolute object-left-top h-1/3"
        style={{ left: "7%" }}
        animationData={Hello}
      ></Lottie>
      <Lottie
        className="absolute object-left-top h-1/3"
        animationData={WavingBird}
      ></Lottie> */}
      <div className="absolute flex flex-row justify-between right-20 top-16">
        <Link
          to={`https://www.credly.com/badges/05182339-5668-49b1-a64b-2aa076141826/public_url`}
          target="_blank"
        >
          <img src={TableauDA} className="size-28" />
        </Link>
        <Link
          to={`https://www.credly.com/badges/b1ef4e45-122f-498b-b9ea-1f722fa03f1b/public_url`}
          target="_blank"
        >
          <img src={AlteryxDesignerCore} className="size-24" />
        </Link>
      </div>
    </div>
  );
}

export default Banner;

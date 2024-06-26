import image1 from "../assets/pdf/1.png";
import image2 from "../assets/pdf/2.png";
import { IoMdDownload } from "react-icons/io";

export default function Resume() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <a
        href="https://github.com/VarunGaikwad/VarunGaikwad/raw/master/Varun_Gaikwad_Resume.pdf"
        download="Varun_Gaikwad_Resume.pdf"
        className="flex items-center gap-2 mt-72 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        <IoMdDownload /> DOWNLOAD
      </a>
      <div className="flex flex-col md:flex-row items-center justify-evenly gap-10 py-10">
        <img className="w-custom" src={image1} alt="Image 1" />
        <img className="w-custom" src={image2} alt="Image 2" />
      </div>
    </div>
  );
}

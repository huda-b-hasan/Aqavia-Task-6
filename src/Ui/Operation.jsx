import { AiOutlineCheckCircle } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { HiOutlinePencil } from "react-icons/hi";

export default function Operation() {
    return <div className="flex items-center justify-between text-center"
    >   <BsEye />
        <AiOutlineCheckCircle />
        <HiOutlinePencil />
    </div>
}
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { HiOutlinePencil } from "react-icons/hi";
import Status from "./Status";
import Operation from "./Operation";
import UserName from "./UserName";
import Code from "./Code";
export default function Table({ columns, config, title = "no title",buttonText }) {
    const styleCellHead =
        "font-bold text-[#64748B] text-start px-4 py-3 bg-[#F8FAFC80] text-sm max-sm:text-xs max-sm:px-2 whitespace-nowrap";

    const styleCellBody =
        "font-bold w-fit text-[#64748B] text-start px-4 py-3 text-sm max-sm:text-xs max-sm:px-2 border-b border-[#F1F5F9] whitespace-nowrap";

    return (
        <div className="bg-white w-full max-w-full rounded-lg border border-[#F1F5F9] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] overflow-hidden" dir="rtl">
            {
                title == "no title" ? "" :
                    <div className="flex items-center justify-between px-4 max-sm:px-2 py-5 border-b-2 border-[#F1F5F9]">
                        <h5 className="text-[#0F172A] text-lg font-bold">{title}  </h5>
                        <button className="text-[#2563EB] text-sm cursor-pointer hover:underline">
                           {buttonText}
                        </button>
                    </div>
            }
            <div className="w-full overflow-x-auto block clear-both">
                <table className="table-auto w-full min-w-full">
                    <thead>
                        <tr>
                            {columns.map((h, index) => (
                                <th key={index} className={styleCellHead}>
                                    {h.header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {config.map((row, rowIndex) => (
                            <tr key={rowIndex} className="hover:bg-slate-50/50 transition-colors">
                                {columns.map((col, colIndex) => (
                                    <td key={colIndex} className={styleCellBody}>
                                        {
                                            col.accessor === "nameUser" ? <UserName photo={row.photo} name={row.name} id={row.id} /> :
                                                col.accessor === "operation" ? <Operation /> :
                                                col.accessor === "code"?<Code title={row[col.accessor]} />:
                                                    (col.accessor === "status" || col.accessor === "workNow") ? (
                                                        <Status title={row[col.accessor]} />
                                                    ) : col.accessor === "img" ? <img src={row.img} /> :
                                                        row[col.accessor]
                                        }
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
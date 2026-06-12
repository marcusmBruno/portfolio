import MarcusBrunoResume from "../MarcusBruno-Resume.pdf"
import { TbFileDownload } from "react-icons/tb";


export function DownloadButton() {
    return (
        <a
            href="src/MarcusBruno-Resume.pdf"
            download={MarcusBrunoResume}
            className="flex items-center gap-2 rounded-lg px-3 py-2 border border-white hover:border-zinc-600 hover:text-zinc-600">
            <TbFileDownload />
            <span>Resume</span>
        </a>
    )
}
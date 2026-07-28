import * as ai from "react-icons/ai";
import { profile } from "../data";

export default function SocialFloat() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
      <a
        href={`mailto:${profile.email}`}
        aria-label="Email Kiana"
        className="w-11 h-11 rounded-md bg-orange-500 text-white flex items-center justify-center shadow-lg hover:bg-orange-600 transition-colors"
      >
        <ai.AiOutlineMail className="text-xl" />
      </a>
      <a
        href={profile.linkedin}
        target="_blank"
        rel="noreferrer"
        aria-label="Kiana on LinkedIn"
        className="w-11 h-11 rounded-md bg-sky-600 text-white flex items-center justify-center shadow-lg hover:bg-sky-700 transition-colors"
      >
        <ai.AiFillLinkedin className="text-xl" />
      </a>
    </div>
  );
}

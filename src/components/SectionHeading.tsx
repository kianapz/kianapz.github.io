import Reveal from "./Reveal";

interface Props {
  eyebrow?: string;
  title: string;
  className?: string;
}

export default function SectionHeading({ eyebrow, title, className = "" }: Props) {
  return (
    <Reveal className={"mb-12 " + className}>
      {eyebrow && (
        <p className="text-orange-500 text-xs font-semibold tracking-widest uppercase mb-2">
          {eyebrow}
        </p>
      )}
      <h2 className="font-Roboto font-bold text-slate-900 text-3xl sm:text-4xl">{title}</h2>
      <span className="block mt-4 w-14 h-1 rounded-full bg-orange-500" />
    </Reveal>
  );
}

import { VIDEO } from "@/lib/v2-content";
import { Label, Section } from "./primitives";
import { VideoPlayer } from "./VideoPlayer";

export function HowItWorks() {
  return (
    <Section id="como-funciona" labelledBy="how-title" tone="raised">
      <div className="mx-auto max-w-[46rem] text-center">
        <Label tone="brand">{VIDEO.eyebrow}</Label>
        <h2 id="how-title" className="k-h2 mt-5">
          {VIDEO.title}
        </h2>
        <p className="k-lead mx-auto mt-5 max-w-[52ch] text-k-soft">{VIDEO.lead}</p>
      </div>

      <div className="mx-auto mt-12 max-w-[1120px] md:mt-16">
        <VideoPlayer />
        <p className="k-small mt-4 text-center text-k-mute">{VIDEO.caption}</p>

        <ol className="mt-12 grid border-t border-k-line sm:grid-cols-2 lg:grid-cols-4">
          {VIDEO.stages.map((s) => (
            <li
              key={s.n}
              className="border-b border-k-line py-6 sm:pr-6 lg:border-b-0 lg:border-r lg:px-6 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
            >
              <p className="k-label text-k-mute">{s.n}</p>
              <h3 className="k-h3 mt-3 text-[1.0625rem]">{s.title}</h3>
              <p className="k-small mt-2 text-k-soft">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

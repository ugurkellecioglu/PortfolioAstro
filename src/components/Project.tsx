import type { ReactNode } from 'react';

type IProjectProps = {
  img: {
    src: string;
    alt: string;
  };
  name: string;
  description: string;
  link: string;
  category: ReactNode;
};

const Project = (props: IProjectProps) => (
  <div className="flex flex-col items-center gap-x-8 rounded-md bg-gray-50 p-3 shadow-2xl md:flex-row">
    <div className="shrink-0">
      <a href={props.link}>
        <img
          className="h-36 w-36 hover:translate-y-1"
          src={props.img.src}
          alt={props.img.alt}
          loading="lazy"
        />
      </a>
    </div>

    <div>
      <div className="flex flex-col items-center gap-y-2 md:flex-row">
        <a className="hover:text-cyan-400" href={props.link}>
          <div className="text-xl font-semibold">{props.name}</div>
        </a>

        <div className="ml-3 flex flex-wrap gap-2">{props.category}</div>
      </div>

      <p className="mt-3 text-gray-800">{props.description}</p>
    </div>
  </div>
);

export { Project };

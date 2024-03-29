import type { MarkdownInstance } from 'astro';
import { format } from 'date-fns';

import type { IFrontmatter } from '..';

type IBlogCardProps = {
  instance: MarkdownInstance<IFrontmatter>;
};

const BlogCard = (props: IBlogCardProps) => (
  <a className="hover:translate-y-1" href={props.instance.url}>
    <div className="min-h-[400px] overflow-hidden  rounded-2xl bg-slate-50 shadow-2xl">
      <div className="aspect-w-3 aspect-h-2">
        <img
          className="p-5"
          src={props.instance.frontmatter.imgSrc}
          alt={props.instance.frontmatter.imgAlt}
        />
      </div>

      <div className="px-3 pt-4 pb-6 text-center">
        <h2 className="text-xl font-semibold">
          {props.instance.frontmatter.title}
        </h2>

        <div className="mt-1 text-xs text-gray-700">
          {format(new Date(props.instance.frontmatter.pubDate), 'LLL d, yyyy')}
        </div>

        <div className="mt-2 text-sm">
          {props.instance.frontmatter.description}
        </div>
      </div>
    </div>
  </a>
);

export { BlogCard };

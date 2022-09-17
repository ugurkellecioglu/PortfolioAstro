import type { ReactNode } from 'react';

import type { IFrontmatter } from '..';

type IPostContentProps = {
  content: IFrontmatter;
  children: ReactNode;
};

const PostContent = (props: IPostContentProps) => (
  <div className="mx-auto mt-5 max-w-7xl">
    <div>
      <img
        className="mx-auto w-96 rounded-lg object-scale-down object-center"
        src={props.content.imgSrc}
        alt={props.content.imgAlt}
        loading="lazy"
      />
    </div>

    <div className="prose prose-invert mt-8 max-w-none prose-img:rounded-lg">
      {props.children}
    </div>
  </div>
);

export { PostContent };

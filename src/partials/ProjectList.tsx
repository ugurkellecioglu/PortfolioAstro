import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from '@/components/index';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
     
      <Project
        name="Proposal Up"
        description="Ai for freelancers. Generate proposals answer questions and more."
        link="/projects/proposalup"
        img={{
          src: '/assets/images/project-proposalup.svg',
          alt: 'Think With Ai',
        }}
        imgStyle={{ width: '100%', height: '50px' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Nuxt 3</Tags>
            <Tags color={ColorTags.ORANGE}>Chrome Extension</Tags>
            <Tags color={ColorTags.VIOLET}>Firebase</Tags>
            <Tags color={ColorTags.CYAN}>Serverless</Tags>
            <Tags color={ColorTags.INDIGO}>Edge</Tags>
            <Tags color={ColorTags.LIME}>Nuxt Content</Tags>
            <Tags color={ColorTags.EMERALD}>Open AI</Tags>
          </>
        }
      />
       <Project
        name="Tivit Engage"
        description="Ai for Twitter. Generate comments, posts, reply, fix grammar mistakes, improve sentences."
        link="/projects/tivitengage"
        img={{
          src: '/assets/images/project-tivitengage.png',
          alt: 'Tivit Engage',
        }}
        imgStyle={{ width: '100%', height: '50px' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Nuxt 3</Tags>
            <Tags color={ColorTags.ORANGE}>Chrome Extension</Tags>
            <Tags color={ColorTags.VIOLET}>Firebase</Tags>
            <Tags color={ColorTags.CYAN}>Serverless</Tags>
            <Tags color={ColorTags.INDIGO}>Edge</Tags>
            <Tags color={ColorTags.LIME}>Nuxt Content</Tags>
            <Tags color={ColorTags.EMERALD}>Open AI</Tags>
          </>
        }
      />
      <Project
        name="Think With AI"
        description="AI for LinkedIn. Generate comments, replies, posts, chat messages"
        link="/projects/thinkwithai"
        img={{
          src: '/assets/images/project-thinkwithai.png',
          alt: 'Think With Ai',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Nuxt 3</Tags>
            <Tags color={ColorTags.ORANGE}>Chrome Extension</Tags>
            <Tags color={ColorTags.VIOLET}>Firebase</Tags>
            <Tags color={ColorTags.CYAN}>Serverless</Tags>
            <Tags color={ColorTags.INDIGO}>Edge</Tags>
            <Tags color={ColorTags.LIME}>Nuxt Content</Tags>
            <Tags color={ColorTags.EMERALD}>Open AI</Tags>
          </>
        }
      />
      <Project
        name="Find If You Can"
        description="A social media platform that allows you to share treasures or find them. A complex project that I built from scratch."
        link="/projects/findifyoucan"
        img={{
          src: '/assets/images/project-findifyoucan.png',
          alt: 'Project Web Design',
        }}
        status="inactive"
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Nuxt</Tags>
            <Tags color={ColorTags.LIME}>Node JS</Tags>
            <Tags color={ColorTags.SKY}>Prisma</Tags>
            <Tags color={ColorTags.ROSE}>Nginx</Tags>
            <Tags color={ColorTags.EMERALD}>MySql</Tags>
            <Tags color={ColorTags.VIOLET}>Docker</Tags>
          </>
        }
      />
      <Project
        name="Asinpan"
        description="Asinpan.com is a web application that provides automation for searching skus on Amazon. I built the whole front end infrastructure and implemented highly scalable and performant components."
        link="/projects/asinpan"
        img={{
          src: '/assets/images/project-asinpan.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Vue 2</Tags>
            <Tags color={ColorTags.LIME}>Nuxt</Tags>
            <Tags color={ColorTags.SKY}>Bootstrap</Tags>
            <Tags color={ColorTags.ROSE}>Vuex</Tags>
          </>
        }
      />
      <Project
        name="Secrets For All"
        description="Highly complex application that provides all the features of a social media platform. Liking, messaging, commenting, following, etc. You can share your secrets anonymously."
        link="/projects/secrets-for-all"
        status="inactive"
        img={{
          src: '/assets/images/project-secrets-for-all.png',
          alt: 'Project Secrets For All',
        }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>React js</Tags>
            <Tags color={ColorTags.EMERALD}>Next js</Tags>
            <Tags color={ColorTags.YELLOW}>MongoDB</Tags>
            <Tags color={ColorTags.CYAN}>Open Source</Tags>
            <Tags color={ColorTags.TEAL}>Social Media</Tags>
          </>
        }
      />
      <Project
        name="Minik"
        description="Minik is a URL shortener. Difference between others and Minik is that Minik provides free customization for your url. Minik is written in Javascript using Vue 3 and Netlify Cloud Functions. There is no server."
        link="/projects/minik"
        img={{ src: '/assets/images/project-minik.png', alt: 'Project Minik' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Vue 3</Tags>
            <Tags color={ColorTags.INDIGO}>Netlify Cloud</Tags>
            <Tags color={ColorTags.ROSE}>URL Shortener</Tags>
            <Tags color={ColorTags.CYAN}>Open Source</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };

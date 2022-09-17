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

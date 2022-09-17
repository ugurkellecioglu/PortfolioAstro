import {
  GradientText,
  HeroAvatar,
  Section,
} from '@/components/index';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Uğur</GradientText> 👋
        </>
      }
      description={
        <>
          Big fan of javascript and open source. I have been working on
          javascript for 3+ years. I am currently working as a frontend
          developer.
          <br />
          I love to share my knowledge with others. I have been writing articles
          on my blog.
          <br />
          I'm in love with open source.
        </>
      }
      avatar={
        <img
          className="h-80 "
          src="/assets/images/profile.jpg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a
            href="https://www.linkedin.com/in/ugurkellecioglu/"
            target="_blank"
          >
            LinkedIn
          </a>
          <a href="mailto:ugur.kellecioglu@outlook.com" target="_blank">
            Mail me
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };

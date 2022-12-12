import { GradientText, HeroAvatar, Section } from '@/components/index';

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
          As a frontend developer with over two years of experience, I am highly
          skilled in JavaScript and open source. I am committed to delivering
          high-quality, innovative solutions and staying at the forefront of the
          industry. I am confident that my experience and skills make me an
          ideal candidate for any organization in need of a talented frontend
          developer.
          <br />
          If you have any job offers or questions, please don't hesitate to
          contact me. I would be happy to discuss how my skills and experience
          can benefit your organization. Thank you for considering me for your
          team.
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

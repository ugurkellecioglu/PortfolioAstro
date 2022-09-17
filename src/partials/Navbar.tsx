import {
  Logo,
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from '@/components/index';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <Logo
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 122.88 122.88"
              height="24"
              className="mr-2"
            >
              <path
                fill="#1AC1EC"
                d="M17.89 0h88.9c8.85 0 16.1 7.24 16.1 16.1v90.68c0 8.85-7.24 16.1-16.1 16.1H16.1c-8.85 0-16.1-7.24-16.1-16.1v-88.9C0 8.05 8.05 0 17.89 0zm53.9 30.55h18.75v36.19c0 3.58-.57 6.97-1.68 10.16-1.12 3.2-2.87 5.98-5.26 8.37-2.39 2.39-4.89 4.06-7.51 5.04-3.65 1.34-8.03 2.02-13.14 2.02-2.96 0-6.18-.21-9.67-.62-3.49-.41-6.42-1.23-8.77-2.46-2.35-1.23-4.5-2.97-6.44-5.23-1.95-2.26-3.28-4.6-4-7-1.16-3.86-1.74-7.28-1.74-10.27v-36.2h18.75v37.06c0 3.31.92 5.9 2.74 7.75 1.84 1.87 4.38 2.8 7.64 2.8 3.21 0 5.74-.92 7.58-2.76 1.82-1.82 2.74-4.43 2.74-7.79V30.55h.01z"
                fill-rule="evenodd"
                clip-rule="evenodd"
              />
            </svg>
          }
          name="Uğur's Blog"
        />
      </a>

      <NavMenu>
        <NavMenuItem href="/posts">Blogs</NavMenuItem>
        <NavMenuItem href="/projects">Projects</NavMenuItem>
        <NavMenuItem href="https://github.com/ugurkellecioglu/" target="_blank">
          GitHub
        </NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };

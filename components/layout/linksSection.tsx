import LinkedInIcon from "@/public/assets/icons/linkedin.svg";
import GithubIcon from "@/public/assets/icons/github.svg";
import MailIcon from "@/public/assets/icons/mail.svg";
import { InternalLink } from "../ui/InternalLink";

const LinksSection = ({ links }: { links: string[] }) => {
  return (
    <section className="flex flex-col items-center justify-center gap-4 max-md:flex-row max-md:mt-[4rem] mt-[14rem] max-md:gap-6">
      {Object.keys(links).map((platform, index) => (
        <InternalLink
          key={index}
          variant="external"
          aria-label={platform === "linkedin" ? "LinkedIn" : "Github"}
          href={links[platform as any]}
          svg={platform === "linkedin" ? LinkedInIcon : GithubIcon}
        />
      ))}
      <InternalLink
        variant="external"
        aria-label="Mail me"
        href="mailto:vladokuskov@gmail.com?Subject=Hello"
        svg={MailIcon}
      />
    </section>
  );
};

export { LinksSection };

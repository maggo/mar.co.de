import styles from "./SocialMedias.module.css";
import TwitterIcon from "../icons/twitter.svg?sprite";
import GithubIcon from "../icons/github.svg?sprite";

export const SocialMedias = () => (
  <ul className={styles.container}>
    <li>
      <a
        href="https://twitter.com/mediaquery"
        title="I'm @mediaquery on twitter.com"
      >
        <TwitterIcon role="img" aria-hidden="true" className={styles.icon} />
        mediaquery
      </a>
    </li>
    <li>
      <a href="https://github.com/maggo" title="I'm @maggo on github.com">
        <GithubIcon role="img" aria-hidden="true" className={styles.icon} />
        maggo
      </a>
    </li>
  </ul>
);

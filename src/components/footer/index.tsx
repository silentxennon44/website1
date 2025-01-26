import classNames from "classnames";
import styles from "./styles.module.scss";
import { footerItems } from "@/static/staticData";
import images from "@/assets";
import { Link } from "react-router";
import GoogleInputBox from "@/components/googleInputBox";
import { useState } from "react";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { validEmailRegex } from "@/utils/helpers";
import { notify } from "@/components/customToast";
import { debounce } from "lodash";

function Footer() {
  const [email, setEmail] = useState("");

  // TODO: Implement subscribe
  const handleSubscribe = debounce((emailInput: string) => {
    if (emailInput === "" || !validEmailRegex.test(emailInput)) {
      notify("Please enter a valid email address");
    }
  }, 500);
  return (
    <footer className={styles.footer}>
      <section className={styles.newsLetterSection}>
        <div className={styles.newsLetterContainer}>
          <h1>Subscribe to our newsletter to stay updated</h1>
          <GoogleInputBox
            value={email}
            onChange={setEmail}
            onOk={handleSubscribe}
            buttonTitle="Email Address"
            placeholder="Email Address"
            type="email"
            AdditionalIcon={FaArrowRightToBracket}
            classname={styles.newsLetterInput}
          />
        </div>
      </section>
      <section className={styles.FooterArticles}>
        <div className={classNames(styles.article, styles.websiteLogo)}>
          <img
            src={images.navigationBar.logo2.src}
            alt={images.navigationBar.logo2.alt}
          />
        </div>
        <div className={styles.otherArticles}>
          <div className={classNames(styles.article, styles.quickLinks)}>
            <h3>Quick Links</h3>
            <div
              className={classNames(
                styles.articleItemsContainer,
                styles.linkContainer
              )}
            >
              {footerItems.quickLinks.map((quickLink) => (
                <Link
                  to={quickLink.link}
                  className={classNames(styles.articleItem, styles.link)}
                  key={quickLink.title}
                >
                  {quickLink.title}
                </Link>
              ))}
            </div>
          </div>
          <div className={styles.article}>
            <h3>Support</h3>
            <div className={classNames(styles.articleItemsContainer)}>
              {footerItems.support.map((support) => (
                <Link
                  to={support.link}
                  className={classNames(styles.articleItem, styles.link)}
                  key={support.title}
                >
                  {support.title}
                </Link>
              ))}
            </div>
          </div>
          {/* TODO: add other articles */}
        </div>
      </section>
      <section className={styles.othersSection}>
        <div className={styles.copyright}>
          <span>{footerItems.copyright}</span>
        </div>
        <div className={styles.socials}>
          {footerItems.links.socials.map((social) => {
            return (
              <div className={styles.link} key={social[0] as string}>
                <a href={social[1] as string}>
                  <i>{social[2]}</i>
                </a>
              </div>
            );
          })}
        </div>
      </section>
    </footer>
  );
}

export default Footer;

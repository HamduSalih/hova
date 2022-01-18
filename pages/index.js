import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../public/Navigation/Navbar.js";
import Banner from "../public/Banner/Banner";
import KnowMore from "../public/KnowMore";
import { IconContext } from "react-icons";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hova</title>
        <meta name="description" content="Aniwurk Landing Page" />
        <link rel="icon" href="/HOVALOGO.png" />
      </Head>

      <main className={styles.main}>
        <Navbar />
        <Banner />
        <KnowMore />
      </main>

      <footer className={styles.footer} id='contact'>
        <div className={styles.contact}>
          <h1 className="bigTitle" stytle={{ marginBottom: 20 }}>
            Contact Us
          </h1>
          <p className="infoContent">
            Interested in what we are doing and want to take part?
            <br /> Reach out to us at <br /> afa.hamdu@gmail.com <br />{" "}
          </p>
          <div className={styles.iconsContainer}>
            <IconContext.Provider
              value={{
                size: "30px",
                color: "#fff",
              }}
            >
              <a href="https://web.facebook.com/hamdus4lih/" className={styles.contactIcons}>
                <FaFacebookF style={{ color: "#fff" }} />
              </a>
            </IconContext.Provider>
            <IconContext.Provider
              value={{
                size: "30px",
                color: "#fff",
              }}
            >
              <a href="https://twitter.com/MbeNapari" className={styles.contactIcons}>
                <FaTwitter style={{ color: "#fff" }} />
              </a>
            </IconContext.Provider>
            <IconContext.Provider
              value={{
                size: "30px",
                color: "#fff",
              }}
            >
              <a href="https://www.linkedin.com/in/hamdu/" className={styles.contactIcons}>
                <FaLinkedinIn style={{ color: "#fff" }} />
              </a>
            </IconContext.Provider>
          </div>
        </div>
        <div className={styles.formContainer}>
          <p className="inforTitle">
            Become a Hovist.
            <br />
            <span className="infoContent">
              Be among the first people to list their properties or find their homes on Hova when we launch.
            </span>
          </p>
          <form className={styles.contactForm}>
            <input
              type="text"
              placeholder="Your Email or phone number here"
              className={styles.formInput}
            />
            <input
              type="text"
              placeholder="Your Email or phone number here"
              className={styles.formInput}
            />
            <select
              placeholder="Select your field"
              className={styles.formInput}
            >
              <option value="Selling">Selling</option>
              <option value="Buying">Buying</option>
              <option value="Renting">Renting</option>
            </select>

            <button className={styles.formButton}>Join Us</button>
          </form>
        </div>
      </footer>
    </div>
  );
}

import styles from "~/components/App.module.scss";

import * as React from "react";
import * as SVG from "~/common/svg";

import App from "~/components/App";
import Button from "~/components/Button";
import NearLogo from "~/components/NearLogo";
import HumanLogo from "~/components/HumanLogo";
import Footer from "~/components/Footer";

const PROJECTS = [
  { name: "Paras", href: "https://paras.id/" },
  { name: "DAORecords", href: "https://www.daorecords.org/" },
  { name: "Berry Club", href: "https://berryclub.io/" },
  { name: "Pulse", href: "https://pulsemarket.eth.link/#!/" },
  { name: "Hash Rush", href: "https://hashrush.com/#/" },
  { name: "OutPlay", href: "https://outplay.games/" },
  { name: "Stake.GG", href: "https://www.stake.gg/" },
  { name: "Mintbase", href: "https://mintbase.io/" },
  { name: "Snark Art", href: "https://snark.art/" },
  { name: "Xeggo", href: "https://xeggo.co/" },
  { name: "Trailit", href: "https://www.trailit.co/" },
  { name: "Boxscore", href: "https://boxscore.live/" },
  { name: "MintGate", href: "https://www.mintgate.app/" },
  { name: "Vezt", href: "https://www.vezt.co/" },
  { name: "Zod", href: "https://www.zod.tv/" },
  { name: "Pixel Party", href: "https://www.near-pixelparty.co/" },
];

function Home(props) {
  const [state, setState] = React.useState({});

  React.useEffect(() => {
    setTimeout(() => {
      setState({
        opacity: 1,
        transform: `translateY(0px)`,
        visibility: "visible",
      });
    }, 1200);
  }, []);

  return (
    <App
      title="Human Guild"
      description="Helping people get rewarded for bringing their creations to the world."
      url="https://humanguild.io"
    >
      <div className="page" style={state}>
        <div className={styles.top}>
          <div className={styles.topLeft}>
            <HumanLogo height="18px" style={{ marginTop: 6 }} />
          </div>
          <div className={styles.topRight}>
            <a
              href="https://near.org"
              target="_blank"
              style={{ color: "#FFF" }}
            >
              <NearLogo height="32px" />
            </a>
          </div>
        </div>

        <iframe
          width="100%"
          height="288px"
          src="https://www.youtube.com/embed/w5rMByAnZmU"
          title="HUMAN GUILD"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        <img
          className={styles.img}
          src="https://next-s3-public.s3-us-west-2.amazonaws.com/splash.png"
          alt="NEAR PROTOCOL 2021"
        />

        <div className={styles.center}>
          <h2
            className={styles.title}
            style={{ letterSpacing: "1.2px", color: "#444" }}
          >
            The Human Guild
          </h2>
          <h3 className={styles.hero} style={{ marginTop: 16 }}>
            We want every human to be rewarded for bringing their creations to
            the world.
          </h3>

          <div className={styles.actions}>
            <Button href="https://discord.gg/bUu2hcdzxW">
              Join our Discord
            </Button>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.col}>
            <SVG.One
              height="68px"
              style={{ marginBottom: 8, color: "#EC5120" }}
            />
            <h2 className={styles.title}>The Opportunity</h2>
            <p className={styles.paragraph}>
              The Human Guild is an open group of founders and creators who
              believe everyone should be able to earn what they need in order to
              do what they love.
            </p>
          </div>
          <div className={styles.col}>
            <SVG.Two
              height="68px"
              style={{ marginBottom: 8, color: "#EC5120" }}
            />
            <h2 className={styles.title}>Our Purpose</h2>
            <p className={styles.paragraph}>
              Our mission is to increase the number of people earning
              cryptocurrencies every day. This helps, but our community is
              always with you so you are not alone.
            </p>
          </div>
          <div className={styles.col}>
            <SVG.Three
              height="68px"
              style={{ marginBottom: 8, color: "#EC5120" }}
            />
            <h2 className={styles.title}>Thinking Forward</h2>
            <p className={styles.paragraph}>
              The Internet is changing and we want more people to experience the
              future together without barriers and gatekeeping. Build what you
              think is useful for humanity.
            </p>
          </div>
        </div>
        <div className={styles.essay}>
          <p className={styles.body}>
            2010—2020 has been an incredible period of achievement and{" "}
            <i>chaos</i> for those who wanted to see change in the Internet
            tools and services people use every day.
          </p>
          <p className={styles.body}>
            Bitcoin sparked the greatest wealth creation event of our generation
            since the Internet. Ethereum ignited a revolution in computing,
            turning <i>application-specific Bitcoin</i> into a general-purpose
            computing platform for the entire globe.
          </p>
          <p className={styles.body}>
            {" "}
            Today we are proudly moving from a place where people are mainly
            buying and selling digital assets to a space where the masses are
            using blockchain-powered apps to participate in an economy that has
            gatekept them from having true economic freedom.
          </p>
          <p className={styles.body}>
            <strong>The Human Guild's</strong> purpose is to obliterate the
            barriers and gatekeeping that prevent people from creating what they
            love. We are overjoyed to have the priviledge of helping the next
            generation of passion driven founders achieve what they want.{" "}
          </p>{" "}
          <p className={styles.body}>
            Thats why we exist. Come create with us!
          </p>
        </div>

        <div className={styles.center}>
          <h2
            className={styles.title}
            style={{ letterSpacing: "1.2px", color: "#444" }}
          >
            The Builders
          </h2>
          <h3 className={styles.hero} style={{ marginTop: 16 }}>
            We are just getting started. <br /> There are already many founders
            and creators building with us.
          </h3>
        </div>

        <div className={styles.grid}>
          {PROJECTS.map((t) => (
            <span className={styles.gridItem} key={t.name}>
              <a href={t.href} target="_blank">
                {t.name}
              </a>
            </span>
          ))}
        </div>

        <img
          className={styles.laptop}
          src="https://next-s3-public.s3-us-west-2.amazonaws.com/paras-laptop.png"
          alt="NEAR AND PARAS AND IPFS"
        />

        <div className={styles.center}>
          <h2
            className={styles.title}
            style={{ letterSpacing: "1.2px", color: "#444" }}
          >
            Open invitation
          </h2>
          <h3 className={styles.hero} style={{ marginTop: 16 }}>
            Tired of waiting to make something? <br />
            Come build with us!
          </h3>

          <div className={styles.actions}>
            <Button href="https://discord.gg/bUu2hcdzxW">
              Join our Discord
            </Button>
          </div>
        </div>

        <Footer />
      </div>
    </App>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default Home;

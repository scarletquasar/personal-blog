import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Olá, eu sou a Scarlet!",
    Svg: "img/scarlet-face.png",
    description: (
      <>
        Sou engenheira de software, já na área há mais de 8 anos. Amo
        tecnologia, adoro trabalhar com pessoas e fico motivada quando consigo
        fazer a diferença.
      </>
    ),
  },
  {
    title: "Boas vindas ao meu blog",
    Svg: "img/scarlet-cute.png",
    description: (
      <>
        Aqui você vai encontrar posts sobre tech, carreira e vídeos no meu canal
        no YouTube com o objetivo de ajudar você a crescer na sua carreira.
      </>
    ),
  },
  {
    title: "Por onde começo?",
    Svg: "img/scarlet-explosion.webp",
    description: (
      <>
        Que tal começar vendo alguns dos meus <a>posts</a> ou talvez um vídeo do
        meu <a>canal</a>? Se tiver alguma dúvida ou sugestão, pode entrar em{" "}
        <a>contato</a>.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img
          src={Svg}
          className={styles.featureSvg}
          style={{
            borderRadius: "100%",
          }}
        />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section
      className={styles.features}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="container">
        <div
          className="row"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "2rem",
          }}
        >
          <h1 style={{ fontSize: "5rem", fontWeight: "bold" }}>
            Scarlet Codes
          </h1>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <div
          className="row"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <button
            className="button button--primary button--lg"
            style={{
              animation: "pulse 1.5s infinite",
              transform: "scale(1)",
              transition: "transform 0.2s",
              fontSize: "1.5rem", // Increased font size
              padding: "1rem 2rem", // Increased padding for a bigger button
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.1)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            Vamos lá!
          </button>
        </div>
      </div>
    </section>
  );
}

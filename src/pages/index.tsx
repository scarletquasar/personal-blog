import type { ReactNode } from "react";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

function HomepageHeader() {
  return <></>;
}

export default function Home(): ReactNode {
  return (
    <Layout
      title={"Scarlet Codes"}
      description="Aqui você vai encontrar posts sobre tech, carreira e vídeos no meu canal no YouTube com o objetivo de ajudar você a crescer na sua carreira."
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <HomepageHeader />
        <main>
          <HomepageFeatures />
        </main>
      </div>
    </Layout>
  );
}

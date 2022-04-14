import { Suspense } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Heading, Text, Code, Link, Image, Box, Divider } from "@chakra-ui/react";
import Layout from "../components/layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Medusa</title>
          <meta name="description" content="Homepage of kunihiro" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <Heading as="h1" className={styles.title}>
            Welcome to <Link href="https://nextjs.org">Medusa!</Link>
          </Heading>
          <Divider />
          <Box boxSize="sm" rounded="3xl">
            <Image src="/home_image.jpg" alt="home page image" />
          </Box>
        </main>
      </div>
    </Layout>
  );
};

export default Home;

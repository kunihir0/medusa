import React from "react"
import { Link } from "@chakra-ui/react"
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
        <Link 
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </Link>
      </footer>
  );
};

export default Footer;

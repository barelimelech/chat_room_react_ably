import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import * as Ably from "ably";
import { AblyProvider, ChannelProvider } from "ably/react";
import UserDetails from "@/components/UserDetails";


const inter = Inter({ subsets: ["latin"] });
const client = new Ably.Realtime({
  key: process.env.NEXT_PUBLIC_ABLY_API_KEY,
  clientId: process.env.NEXT_PUBLIC_ABLY_CLIENT_ID,
});
export default function Home() {
  return (
    <>
      <AblyProvider client={client}>
        <UserDetails />
      </AblyProvider>
    </>
  );
}

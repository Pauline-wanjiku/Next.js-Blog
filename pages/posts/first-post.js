import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />

      <Link href="/">Back to home</Link>
      <Image
        src="/images/Pauline's.jpg"
        height={144}
        width={144}
        alt={"profile picture"}></Image>
    </>
  );
}
export default FirstPost;

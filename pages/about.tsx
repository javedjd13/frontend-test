import AboutSection from "@/components/About/AboutSection";
import Head from "next/head";

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About | My Modern App</title>
        <meta name="description" content="Learn more about us and our journey." />
      </Head>
      <main className="bg-gray-50 min-h-screen">
        <AboutSection />
      </main>
    </>
  );
};

export default AboutPage;

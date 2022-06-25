import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <title>{title} </title>
    </Head>
  );
};

Meta.defaultProps = {
  keywords: "web development, programming, coding",
};

export default Meta;

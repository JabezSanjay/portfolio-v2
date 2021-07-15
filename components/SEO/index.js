import React from "react";
import Head from "next/head";

export default function SEO({
  description = "Jabez Sanjay is a Full Stack Web Developer (MERN) in Javascript(Node.js, Express, React, MongoDB). Experienced building complete web application with backend API systems.",
  author = "Jabez Sanjay",
  meta,
  title = "Jabez Sanjay | Fullstack MERN developer",
}) {
  const metaData = [
    {
      name: `description`,
      content: description,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
  ].concat(meta);

  return (
    <Head>
      <title>{title}</title>
      {metaData.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}
    </Head>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
};

import React from "react";
import { GetStaticProps } from "next";
import prisma from "../../lib/prisma";
import Layout from "../components/Layout";
import Post, { PostProps } from "../components/Post";
import { Home } from "../containers/Home/Home";

export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  console.log(feed);
  return { props: { feed } };
};

type Props = {
  feed: PostProps[];
};

const Blog: React.FC<Props> = (props) => {
  return (
    <Layout>
      <Home></Home>
    </Layout>
  );
};

export default Blog;

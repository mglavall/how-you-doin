import React from "react";
import { GetStaticProps } from "next";
import prisma from "../../lib/prisma";
import Layout from "../components/Layout";
import Post, { PostProps } from "../components/Post";
import { Home } from "../containers/Home/Home";

export default Home;

import React from "react";
import { GetStaticProps } from "next";
import prisma from "../../lib/prisma";
import Layout from "../components/Layout";
import Post, { PostProps } from "../components/Post";
import { Home } from "../containers/Home/Home";
import axios from "axios";

export default Home;
export async function getServerSideProps() {
    debugger;
    console.log("HOLA?");
    const {data} = await axios.get("http://localhost:3000/api/calendar");
 
    return {props: {data}}
  }

import React, { useEffect, useState } from "react";
import styles from "./singlePage.module.css";
import Image from "next/image";
import axios from "axios";
import SingleItem from "@/components/SingleItem/SingleItem";

interface MyApiParams {
  params: {
    slug: string;
  };
}
interface SingleItemProps {
  slug: string;
}

const SinglePage: React.FC<MyApiParams> = ({ params }) => {
  const { slug } = params;
  return <SingleItem slug={slug as string} />;
};

export default SinglePage;

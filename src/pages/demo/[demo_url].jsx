import { useRouter } from "next/router";
import React, { useState } from "react";
import DemoPink1 from "./pink1";

const Demo = () => {
  const router = useRouter();
  const name_url = router.query.name_url;
  return <div>{name_url === "pink1" ? <DemoPink1 /> : null}</div>;
};

export default Demo;

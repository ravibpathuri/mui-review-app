import React, { Suspense } from "react";
import Loader from "./Loader";

interface LoadableProps extends React.PropsWithChildren {}

const Loadable: React.FC<LoadableProps> = ({ children }) => {
  return <Suspense fallback={<Loader />}>{children}</Suspense>;
};

export default Loadable;

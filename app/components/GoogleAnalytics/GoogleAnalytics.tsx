import { FC, Fragment } from "react";
import Script from "next/script";

type Props = {};

const GoogleAnalytics: FC<Props> = ({}) => {
  return (
    <Fragment>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-8DW5JBSW8D"
      ></Script>
      <Script src="./script.js"></Script>
    </Fragment>
  );
};

export default GoogleAnalytics;

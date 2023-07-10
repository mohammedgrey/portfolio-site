import { FC, Fragment } from "react";
import Script from "next/script";

type Props = {};

const GoogleAnalytics: FC<Props> = ({}) => {
  return (
    <Fragment>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_CODE}`}
      ></Script>
      <Script src="./script.js"></Script>
    </Fragment>
  );
};

export default GoogleAnalytics;

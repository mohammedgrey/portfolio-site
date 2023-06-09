"use client";
import usePreferencesStore from "@/stores/usePreferencesStore";
import { FC, MutableRefObject, useEffect } from "react";
import GoogleRecaptcha from "react-recaptcha";

type Props = {
  onVerified: () => void;
  onExpired: () => void;
  recaptchaRef: MutableRefObject<GoogleRecaptcha | null>;
};

const Recaptcha: FC<Props> = ({ onExpired, onVerified, recaptchaRef }) => {
  const { theme } = usePreferencesStore();

  useEffect(() => {
    onExpired();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  return (
    <GoogleRecaptcha
      ref={recaptchaRef}
      sitekey={process.env.NEXT_PUBLIC_EMAIL_RECAPTCHA_SITE_KEY}
      render="explicit"
      expiredCallback={onExpired}
      size={"normal"}
      theme={theme}
      verifyCallback={(res: any) => {
        if (res) {
          onVerified();
        }
      }}
    />
  );
};

export default Recaptcha;

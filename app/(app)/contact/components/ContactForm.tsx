"use client";
import rives from "@/configs/rives";
import usePreferencesStore from "@/stores/usePreferencesStore";
import * as emailjs from "@emailjs/browser";
import dynamic from "next/dynamic";
import React, { useRef, useState } from "react";
import { useRive } from "rive-react";
import { validateEmail } from "../helpers";
import styles from "./styles.module.scss";
import RecaptchaType from "react-recaptcha";

const Recaptcha = dynamic(() => import("./components/Recaptcha/Recaptcha"), {
  ssr: false,
  loading: () => <div style={{ height: "136px", width: "100%" }} />,
});

const ContactForm = () => {
  const recaptchaRef = useRef<RecaptchaType | null>(null);

  const { theme } = usePreferencesStore();
  const { RiveComponent: DogRiv, rive: dogRive } = useRive({
    src: rives.input,
    animations: "idle",
    autoplay: true,
  });
  const { RiveComponent: LoadingSuccessRiv, rive: loadingSuccessRive } =
    useRive({
      src: rives.loadingSuccess,
      animations: "Comp 1",
      autoplay: false,
    });

  const { RiveComponent: SendingEmailRiv, rive: sendingEmailRive } = useRive({
    src: rives.sendingEmail,
    animations: "mail-send",
    autoplay: false,
  });
  const [loadingEmail, setLoadingEmail] = useState(false);
  const [sentEmail, setSentEmail] = useState(false);
  const [verified, setVerified] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    const eName = e.target.name;
    setFormData({ ...formData, [eName]: e.target.value });
  };
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    try {
      setLoadingEmail(true);
      sendingEmailRive?.play(["mail-send"]);
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID || "",
        formRef.current || "",
        process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY || ""
      );
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setSentEmail(true);
      loadingSuccessRive?.play(["Comp 1"]);
      setTimeout(() => {
        loadingSuccessRive?.pause(["Comp 1"]);
      }, 2000);
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingEmail(false);
      setVerified(false);

      sendingEmailRive?.pause(["mail-send"]);
      if (recaptchaRef.current) recaptchaRef.current.reset();
    }
  };

  const isSubmitDisabled =
    !validateEmail(formData.email) || formData.message === "" || !verified;

  return (
    <div className={styles.partContainer}>
      <h2 className={styles.partTitle}>
        <span style={{ fontSize: "14px" }}>Or</span> send me an email directly
      </h2>
      <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="name">Name</label>
        <input
          name="name"
          type="text"
          onChange={handleChange}
          value={formData.name}
          placeholder="Optional, but preferable."
        ></input>
        <label htmlFor="email">
          Email Address{" "}
          {!validateEmail(formData.email) && (
            <span className={styles.requiredHint}>required</span>
          )}
        </label>
        <input
          name="email"
          type="email"
          onChange={handleChange}
          value={formData.email}
          placeholder="Required, so I can contact you back."
        ></input>
        <label htmlFor="subject">Email Subject</label>
        <input
          name="subject"
          type="text"
          onChange={handleChange}
          value={formData.subject}
          placeholder="Optional, but preferable."
        ></input>
        <label htmlFor="message">
          Email Body{" "}
          {formData.message === "" && (
            <span className={styles.requiredHint}>required</span>
          )}
        </label>
        <div style={{ position: "relative", width: "100%" }}>
          <DogRiv className={styles.textareaRiv} />
          <textarea
            onFocus={() => {
              dogRive?.play(["yayEntry", "yayLoop"]);
            }}
            onBlur={() => {
              dogRive?.stop(["yayLoop"]);
              dogRive?.play(["idle", "blink"]);
            }}
            name="message"
            onChange={handleChange}
            value={formData.message}
          ></textarea>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            height: "100px",
            width: "100%",
            alignItems: "center",
          }}
        >
          <Recaptcha
            key={theme}
            recaptchaRef={recaptchaRef}
            onVerified={() => setVerified(true)}
            onExpired={() => setVerified(false)}
          />
        </div>

        {!loadingEmail && !sentEmail && (
          <button className={styles.submitButton} disabled={isSubmitDisabled}>
            Send Email
          </button>
        )}
        <div
          style={{
            width: "100%",
            display: !loadingEmail && !sentEmail ? "none" : "flex",
            gap: "8px",
            alignItems: "center",
            justifyContent: "center",
            height: "40px",
          }}
        >
          <LoadingSuccessRiv
            style={{
              width: "40px",
              height: "40px",
              display: sentEmail ? "block" : "none",
            }}
          />
          <SendingEmailRiv
            style={{
              width: "40px",
              height: "40px",
              display: loadingEmail ? "block" : "none",
            }}
          />
          <p style={{ width: "180px", textAlign: "center" }}>
            {loadingEmail ? "Sending Email..." : "Email Sent Successfully"}
          </p>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

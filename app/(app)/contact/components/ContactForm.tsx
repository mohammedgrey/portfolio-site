"use client";
import rives from "@/configs/rives";
import usePreferencesStore from "@/stores/usePreferencesStore";
import * as emailjs from "@emailjs/browser";
import dynamic from "next/dynamic";
import React, { useRef, useState } from "react";
import { useRive } from "rive-react";
import { validateEmail } from "../helpers";
import styles from "./styles.module.scss";

const Recaptcha = dynamic(() => import("./components/Recaptcha/Recaptcha"), {
  ssr: false,
  loading: () => <div style={{ height: "136px", width: "100%" }} />,
});

const ContactForm = () => {
  const recaptchaRef = useRef<any>(null);

  const { theme } = usePreferencesStore();
  const { RiveComponent, rive } = useRive({
    src: rives.input,
    animations: "idle",
    autoplay: true,
  });
  const [loadingEmail, setLoadingEmail] = useState(false);
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
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID || "",
        formRef.current || "",
        process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY || ""
      );
      setLoadingEmail(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setVerified(false);
      if (recaptchaRef.current) recaptchaRef.current.reset();
    } catch (err) {
      setLoadingEmail(false);
      setVerified(false);
      if (recaptchaRef.current) recaptchaRef.current.reset();
    }
  };

  const isSubmitDisabled =
    !validateEmail(formData.email) || formData.message === "" || !verified;

  return (
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
        <RiveComponent className={styles.textareaRiv} />
        <textarea
          onFocus={() => {
            rive?.play(["yayEntry", "yayLoop"]);
          }}
          onBlur={() => {
            rive?.stop(["yayLoop"]);
            rive?.play(["idle", "blink"]);
          }}
          name="message"
          onChange={handleChange}
          value={formData.message}
        ></textarea>
      </div>
      <div style={{ margin: "auto auto" }}>
        <Recaptcha
          key={theme}
          recaptchaRef={recaptchaRef}
          onVerified={() => setVerified(true)}
          onExpired={() => setVerified(false)}
        />
      </div>
      {!loadingEmail ? (
        <button className={styles.submitButton} disabled={isSubmitDisabled}>
          Send
        </button>
      ) : (
        <div style={{ margin: "auto auto" }}>loading</div>
      )}
    </form>
  );
};

export default ContactForm;
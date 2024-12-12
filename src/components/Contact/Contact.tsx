"use client";

import { FC, useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { motion } from "framer-motion";
import styles from "./Contact.module.scss";

export type FormData = {
  name: string;
  phone: string;
  email: string;
  agreedToPolicy: boolean;
};

export interface ContactFormProps {
  onFormSubmitSuccess?: () => void; // Функция обратного вызова для успешной отправки
}

const Contact: FC<ContactFormProps> = ({ onFormSubmitSuccess }) => {
  const [message, setMessage] = useState<string | null>(null);
  const [filled, setFilled] = useState({
    name: false,
    phone: false,
    email: false,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      ["name", "phone", "email"].forEach((field) => {
        const input = document.getElementById(field) as HTMLInputElement;
        if (input && input.value) {
          setFilled((f) => ({ ...f, [field]: true }));
        }
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilled((prev) => ({ ...prev, [name]: value.trim() !== "" }));
  };

  const initialValues: FormData = {
    name: "",
    phone: "",
    email: "",
    agreedToPolicy: false,
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Imię jest wymagane"),
    phone: Yup.string().required("Telefon jest wymagany"),
    email: Yup.string()
      .email("Nieprawidłowy адрес email")
      .required("Email jest wymagany"),
    agreedToPolicy: Yup.boolean()
      .required("Wymagana zgoda")
      .oneOf([true], "Wymagana jest zgoda na przetwarzanie danych osobowych"),
  });

  const onSubmit = async (
    values: FormData,
    { setSubmitting, resetForm }: FormikHelpers<FormData>
  ) => {
    setSubmitting(true);
    try {
      const response = await axios.post("/api/monday", values);
      if (response.data.message === "Lead successfully sent to monday.com") {
        setMessage(
          "I received your message and will contact you soon. Wait a moment :)"
        );
        resetForm({});
        setFilled({ name: false, phone: false, email: false }); // Reset the filled state
        setTimeout(() => {
          onFormSubmitSuccess && onFormSubmitSuccess();
        }, 5000);
      } else {
        throw new Error("Server responded with an error");
      }
    } catch (error) {
      setMessage(
        "An error occurred while submitting the form. Please try again"
      );
    } finally {
      setSubmitting(false);
      setTimeout(() => {
        setMessage(null);
      }, 5000);
    }
  };

  return (
    <>
      {message && <div className={styles.popup}>{message}</div>}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className={styles.inputWrapper}>
              <label
                htmlFor="name"
                className={`${styles.label} ${
                  filled.name ? styles.filled : ""
                }`}
              >
                Name
              </label>
              <Field
                id="name"
                name="name"
                type="text"
                className={`${styles.inputField} w-full rounded-md`}
                onBlur={handleBlur}
              />
              <ErrorMessage
                name="name"
                component="div"
                className={styles.error}
              />
            </div>
            <div className={styles.inputWrapper}>
              <label
                htmlFor="phone"
                className={`${styles.label} ${
                  filled.phone ? styles.filled : ""
                }`}
              >
                Phone
              </label>
              <Field
                id="phone"
                name="phone"
                type="tel"
                className={`${styles.inputField} w-full rounded-md`}
                onBlur={handleBlur}
              />
              <ErrorMessage
                name="phone"
                component="div"
                className={styles.error}
              />
            </div>
            <div className={styles.inputWrapper}>
              <label
                htmlFor="email"
                className={`${styles.label} ${
                  filled.email ? styles.filled : ""
                }`}
              >
                Email
              </label>
              <Field
                id="email"
                name="email"
                type="email"
                className={`${styles.inputField} w-full rounded-md`}
                onBlur={handleBlur}
              />
              <ErrorMessage
                name="email"
                component="div"
                className={styles.error}
              />
            </div>
            <div className={styles.customCheckbox}>
              <Field
                type="checkbox"
                name="agreedToPolicy"
                id="agreedToPolicy"
              />
              <label htmlFor="agreedToPolicy">
                I agree to the processing of personal data
              </label>
            </div>
            <div>
              {/* <button type='submit' className={styles.sentBtn} disabled={isSubmitting}>Wyślij wiadomość</button> */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 100, damping: 10 }}
                className={styles.button}
                disabled={isSubmitting}
              >
                Send
              </motion.button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Contact;

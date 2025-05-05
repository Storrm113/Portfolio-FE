import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";

export default function Contact() {
  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string()
      .min(10, "Message must be at least 10 characters")
      .required("Message is required"),
  });

  const handleSubmit = async (values, { resetForm, setStatus }) => {
    if (!recaptchaToken) {
      setStatus("Please complete the CAPTCHA");
      return;
    }

    try {
      setStatus("Sending...");
      await axios.post(`${API_BASE_URL}/api/contact`, {
        ...values,
        recaptchaToken,
      });
      setStatus("Message sent ✅");
      resetForm();
      setRecaptchaToken(null);
    } catch (err) {
      console.error("❌ Error sending message:", err);
      setStatus("Something went wrong ❌");
    }
  };

  return (
    <section className="min-h-screen bg-[#fef3c7] dark:bg-black text-gray-900 dark:text-red-100 transition-colors duration-300 py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md space-y-6">
        <h2 className="text-3xl font-bold text-blue-700 dark:text-red-400">
          Contact Me
        </h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ status }) => (
           <Form className="space-y-5">
           {/* Name */}
           <div>
             <Field
               name="name"
               placeholder="Name"
               className="w-full p-2 placeholder-gray-500 rounded border-2 border-gray-400 dark:bg-gray-800 dark:text-white dark:border-red-400"
             />
             <ErrorMessage
               name="name"
               component="div"
               className="text-red-500 text-sm mt-1"
             />
           </div>
         
           {/* Email */}
           <div>
             <Field
               name="email" 
               placeholder="Email"
               className="w-full p-2 placeholder-gray-500 rounded border-2 border-gray-400 dark:bg-gray-800 dark:text-white dark:border-red-400"
             />
             <ErrorMessage
               name="email"
               component="div"
               className="text-red-500 text-sm mt-1"
             />
           </div>
         
           {/* Message */}
           <div>
             <Field
               name="message"
               as="textarea"
               rows="4"
               placeholder="Your message..."
               className="w-full p-2 placeholder-gray-500 rounded border-2 border-gray-400 dark:bg-gray-800 dark:text-white dark:border-red-400"
             />
             <ErrorMessage
               name="message"
               component="div"
               className="text-red-500 text-sm mt-1"
             />
           </div>
         
           {/* reCAPTCHA */}
           <ReCAPTCHA
             sitekey="6Ld5Mi4rAAAAADUC5_sveUrjc0U3xTZcEh0Ic9Q6"
             onChange={(token) => setRecaptchaToken(token)}
           />
         
           {/* Submit Button */}
           <button
             type="submit"
             className="bg-blue-600 hover:bg-blue-700 dark:bg-red-600 dark:hover:bg-red-700 text-white font-semibold py-2 px-5 rounded shadow transition-colors"
           >
             Send Message
           </button>
         
           {status && (
             <p className="text-green-600 dark:text-green-400 text-sm mt-2">
               {status}
             </p>
           )}
         </Form>
         
          )}
        </Formik>
      </div>
    </section>
  );
}

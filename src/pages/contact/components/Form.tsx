import { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { SITE_KEY } from "utilities/config";
import { motion } from "framer-motion";
import { Request, URLS } from "api";
import { RippleButton } from "components";
import { checkedIcon } from "utilities/icons";

const Form: FC = () => {
  const [loading, setLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm();

  useEffect(() => {
    const loadScriptByURL = (id, url, callback) => {
      const isScriptExist = document.getElementById(id);

      if (!isScriptExist) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = url;
        script.id = id;
        script.onload = function () {
          if (callback) callback();
        };
        document.body.appendChild(script);
      }

      if (isScriptExist && callback) callback();
    };

    // load the script by passing the URL
    loadScriptByURL(
      "recaptcha-key",
      `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`,
      function () {}
    );
  }, []);

  const onSubmit = (data) => {
    (window as any).grecaptcha.ready(() => {
      (window as any).grecaptcha
        .execute(SITE_KEY, { action: "submit" })
        .then((token) => {
          submitData(token, data);
        });
    });
  };
  const submitData = async (token, data) => {
    setLoading(true);
    const { name, email, subject, message } = data;
    const params = {
      name,
      email,
      subject,
      message,
      "g-recaptcha-response": token,
    };
    try {
      const saveData = await Request.post(URLS.Contact, params);
      if (saveData) {
      }
    } catch (err) {
    } finally {
      setTimeout(() => {
        reset();
        setLoading(false);
        setShowMessage(true);
      }, 2000);
    }
  };
  return (
    <div>
      {showMessage ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.3 } }}
          exit={{ opacity: 0 }}
          className="flexBox flex-col h-64 text-secondary text-lg"
        >
          <div>{checkedIcon}</div>
          <p className="capitalize my-4">Your message successfully sent</p>
          <RippleButton
            onClick={() => setShowMessage(false)}
            classes="text-white bg-green bg-indigo-500 block  px-6 py-2"
          >
            Continue
          </RippleButton>
        </motion.div>
      ) : (
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.3 } }}
          exit={{ opacity: 0 }}
          onSubmit={handleSubmit(onSubmit)}
          className="mb-4"
        >
          <div className="contact-form">
            <div>
              <input
                type="text"
                placeholder="Name"
                {...register("name", {
                  required: "please enter your name",
                  maxLength: 40,
                  // pattern: {
                  //   value: /^[A-Za-z]+$/i,
                  //   message: "Entered value does not match name format",
                  // },
                })}
                className={` ${!!errors.name ? "border-error" : ""}`}
              />
              <label className="h-4 text-xs text-red-400 flex justify-start items-center capitalize">
                {errors?.name?.message}
              </label>
            </div>
            <div>
              <input
                type="text"
                placeholder="Email Address"
                {...register("email", {
                  required: "please enter your Email",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Entered value does not match email format",
                  },
                })}
                className={` ${!!errors.email ? "border-error" : ""}`}
              />
              <label className="h-4 text-xs text-red-400 flex justify-start items-center capitalize">
                {errors?.email?.message}
              </label>
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Subject"
                {...register("subject")}
              />
            </div>
            <div>
              <textarea
                placeholder="Message"
                {...register("message", {
                  required: "please enter your Message",
                  maxLength: 1000,
                })}
                className={`resize-none w-full ${
                  !!errors.message ? "border-error" : ""
                }`}
              ></textarea>
              <label className="h-4 text-xs text-red-400 flex justify-start items-center mb-1 -mt-1 capitalize">
                {errors?.message?.message}
              </label>
            </div>
            <div>
              <RippleButton
                classes="text-white bg-green bg-indigo-500 block  px-6 py-2"
                loading={loading}
                type="submit"
              >
                Send Message
              </RippleButton>
            </div>
          </div>
        </motion.form>
      )}
    </div>
  );
};

export default Form;

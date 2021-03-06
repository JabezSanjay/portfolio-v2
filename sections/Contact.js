import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import COLORS from "../assets/colors";
import { fadePageAnimation } from "../components/Animations";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { useToasts } from "react-toast-notifications";

const Contact = () => {
  let reveal1 = useRef(null);
  let reveal2 = useRef(null);
  let reveal3 = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fadePageAnimation(reveal1, reveal2, reveal3);
  }, []);

  const { addToast } = useToasts();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    setLoading(true);
    await emailjs
      .send(
        "service_6988yt7",
        "template_0ymfk2h",
        data,
        "user_tGuRAsWBDoxAvgeekA91U"
      )
      .then(
        function (response) {
          setLoading(false);
          addToast("Message sent successfully!", {
            appearance: "success",
            autoDismiss: true,
          });
          reset({ register });
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <ContactTag>
      <section className="contactpage" id="contactpage">
        <div className="sections">
          <div className="notation" ref={(el) => (reveal1 = el)}></div>
          <h3 ref={(el) => (reveal2 = el)}>
            I’d love to meet up with you to discuss your venture, and potential
            collaborations.
          </h3>
          <div className="mailbg" ref={(el) => (reveal3 = el)}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label className="l1" htmlFor="mailinput">
                Your Email :
              </label>
              <input
                className="mailinput"
                aria-label="Your Email"
                autoComplete="on"
                type="email"
                placeholder=""
                {...register("email", {
                  required: "Please enter your email!",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Please enter a valid email!",
                  },
                })}
              />
              {errors.email && (
                <p className="error-message-email">{errors.email.message}</p>
              )}

              <label className="l2" htmlFor="messtxt">
                Your Message :
              </label>
              <textarea
                className="messtxt"
                aria-label="Your Message"
                placeholder=""
                {...register("message", {
                  required: "Please enter your messsage!",
                  maxLength: {
                    value: 500,
                    message: "Enter below 500 words please!",
                  },
                })}
              ></textarea>
              {errors.message && (
                <p className="error-message">{errors.message.message}</p>
              )}
              {loading ? (
                <button className="sendmess" aria-label="Send message">
                  Sending...
                </button>
              ) : (
                <button className="sendmess" aria-label="Send message">
                  Send
                </button>
              )}
            </form>
          </div>
        </div>
      </section>
    </ContactTag>
  );
};

export default Contact;

const ContactTag = styled.div`
  .contactpage {
    background-image: url("/Images/contact-bg.svg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 100vh;
    .sections {
      button {
        padding: 0;
        border: 0;
        background: none;
      }
      .notation {
        &:before {
          content: "╾Say hello 👋";
          color: ${COLORS.PURPLE_COLOR};
          font-size: 1.2rem;
          font-weight: 800;
          display: flex;
          margin-top: 1.2em;
          justify-content: center;
          align-items: center;
        }
      }

      h3 {
        color: ${COLORS.PRIMARY_BLACK};
        text-align: center;
        font-size: 1.65rem;
      }

      .mailbg {
        margin-top: 1.25em;
        position: absolute;
        left: 50%;
        top: 50%;
        width: 80vw;
        max-width: 25rem;
        height: 31.25rem;
        background: ${COLORS.PURPLE_COLOR};
        -moz-border-radius: 1.25rem;
        -webkit-border-radius: 1.25rem;
        border-radius: 1.25rem;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        .error-message-email {
          position: absolute;
          font-size: 0.8rem;
          color: #750000;
          font-weight: 500;
          top: 92px;
          left: 5%;
        }
        .error-message {
          position: absolute;
          font-size: 0.8rem;
          color: #750000;
          font-weight: 500;
          top: 395px;
          left: 5%;
          z-index: 999;
        }
      }

      .mailbg:before {
        content: "";
        position: absolute;
        right: 50%;
        top: 99%;
        width: 0;
        height: 0;
        border-top: 50px solid ${COLORS.PURPLE_COLOR};
        border-right: 30px solid transparent;
        border-left: 5px solid transparent;
        -webkit-transform: translate(0%, -0%);
        -ms-transform: translate(0%, -0%);
        transform: translate(0%, -0%);
        transform: rotate(0deg);
      }

      label {
        font-size: 1.05rem;
        font-weight: 600;
      }

      .l1 {
        position: absolute;
        top: 20px;
        left: 5%;
        color: ${COLORS.SECONDARY_COLOR};
      }

      .l2 {
        position: absolute;
        top: 120px;
        left: 5%;
        color: ${COLORS.SECONDARY_COLOR};
      }

      .mailinput {
        position: absolute;
        top: 50px;
        box-sizing: border-box;
        border: none;
        padding: 5px;
        left: 50%;
        width: 90%;
        height: 50px;
        resize: none;
        font-size: 1.2em;
        -webkit-transform: translate(-50%, -0%);
        -ms-transform: translate(-50%, -0%);
        transform: translate(-50%, -0%);
      }

      .mailinput:focus {
        outline: none;
      }

      .messtxt {
        position: absolute;
        top: 150px;
        box-sizing: border-box;
        border: none;
        padding: 5px;
        left: 50%;
        width: 90%;
        height: 250px;
        resize: none;
        font-size: 1rem;
        -webkit-transform: translate(-50%, -0%);
        -ms-transform: translate(-50%, -0%);
        transform: translate(-50%, -0%);
      }

      .messtxt:focus {
        outline: none;
      }

      .sendmess {
        position: absolute;
        top: 430px;
        left: 50%;
        -webkit-transform: translate(-50%, -0%);
        -ms-transform: translate(-50%, -0%);
        transform: translate(-50%, -0%);
        width: 90%;
        height: 50px;
        text-align: center;
        font-size: 1.2em;
        font-weight: 700;
        color: ${COLORS.PURPLE_COLOR};
        background: ${COLORS.SECONDARY_COLOR};
        line-height: 40px;
        cursor: pointer;
      }

      .sendmess:focus {
        outline: none;
      }

      .bar {
        position: absolute;
        width: auto;
        background: #fcda2f;
        top: 0%;
        left: 0;
        right: 100%;
        height: 100%;
        content: "";
        animation: sent 1.5s forwards;
        animation-delay: 0.2s;
      }

      @keyframes send {
        0% {
          right: 100%;
        }
        100% {
          right: 0%;
        }
      }

      .success {
        position: absolute;
        top: 120px;
        width: 80%;
        left: 50%;
        -webkit-transform: translate(-50%, -0%);
        -ms-transform: translate(-50%, -0%);
        transform: translate(-50%, -0%);
        text-align: center;
        font-size: 2em;
        font-weight: bold;
        display: none;
      }

      .closemess {
        position: absolute;
        top: 330px;
        left: 50%;
        -webkit-transform: translate(-50%, -0%);
        -ms-transform: translate(-50%, -0%);
        transform: translate(-50%, -0%);
        width: 60%;
        height: 50px;
        text-align: center;
        font-size: 1.2em;
        font-weight: bold;
        color: #fcda2f;
        background: #000;
        line-height: 40px;
        cursor: pointer;
        display: none;
      }

      .closemess:focus {
        outline: none;
      }
    }
  }
  /* Moto G5 */
  @media (min-width: 200px) and (max-width: 370px) {
    .contactpage {
      .sections {
        h3 {
          display: none;
        }
        .mailbg {
          margin-top: 1.3em;
        }
      }
    }
  }

  /* Iphone */
  @media (min-height: 650px) and (max-height: 670px) {
    .contactpage {
      .sections {
        h3 {
          display: none;
        }
        .mailbg {
          margin-top: 1.3em;
        }
      }
    }
  }

  @media (min-width: 375px) and (max-width: 400px) {
    .contactpage {
      .sections {
        h3 {
          font-size: 1.3rem;
          margin: 0.8em;
        }
        .mailbg {
          margin-top: 2em;
        }
      }
    }
  }
  /* Iphone 6 */
  @media (min-width: 401px) and (max-width: 450px) {
    .contactpage {
      .sections {
        h3 {
          font-size: 1.15rem;
          margin: 0.8em;
        }
        .mailbg {
          margin-top: 2em;
        }
      }
    }
  }
`;

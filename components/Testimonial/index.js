import React from "react";
import Image from "next/image";
import styled from "styled-components";

const Testimonial = () => {
  return (
    <TestimonialTag>
      <main>
        <div className="slider">
          <div className="slide">
            <div className="slider-img">
              <Image
                height={540}
                width={540}
                src="/Images/image-jegan.jpg"
                alt="Author Image"
              />
            </div>
          </div>
        </div>
      </main>
    </TestimonialTag>
  );
};

export default Testimonial;

const TestimonialTag = styled.div`
  main {
    width: 100%;
    padding: 16px;

    .slider {
      .buttons {
        z-index: 1;
        right: 50%;
        top: 261px;
        width: 80px;
        height: 40px;
        position: absolute;
        border-radius: 50px;
        transform: translateX(50%);
        background-color: #ffffff;

        .previous,
        .next {
          width: 50%;
          height: 100%;
          position: absolute;
          background-repeat: no-repeat;
          background-position: center;
          cursor: pointer;
        }

        .previous {
          left: 0;
          background-image: url("https://alcs-slider.netlify.app/images/icon-prev.svg");

          &:hover {
            transform: scale(1.25);
          }
        }

        .next {
          right: 0;
          background-image: url("https://alcs-slider.netlify.app/images/icon-next.svg");

          &:hover {
            transform: scale(1.25);
          }
        }
      }

      .slide {
        display: flex;
        margin: 0 auto;
        text-align: center;
        align-items: center;
        justify-content: center;
        flex-direction: column-reverse;

        .testimonial {
          padding: 32px 51px;
          background-size: 60px;
          background-position: top;
          background-repeat: no-repeat;
          background-image: url("https://alcs-slider.netlify.app/images/pattern-quotes.svg");

          blockquote {
            font-size: 18px;
            font-weight: 300;
            line-height: 24px;
            margin-bottom: 36px;
          }

          .author {
            font-size: 15px;
            font-weight: 700;

            span {
              display: block;
              color: hsl(240, 18%, 77%);
              font-weight: 500;
            }
          }
        }

        .slider-img {
          width: 100%;
          padding: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
          background-image: url("https://alcs-slider.netlify.app/images/pattern-bg.svg");

          img {
            width: 240px;
            display: block;
            border-radius: 10px;
            box-shadow: 0px 16px 40px 0px rgba(135, 105, 210, 0.4);
          }
        }

        .active {
          opacity: 1;
          transform: translateX(0) scale(1);
          transition-delay: 0.4s;
        }
      }
    }
  }

  .hide {
    display: none;
  }

  @media screen and (min-width: 600px) {
    html {
      body {
        main {
          max-width: 800px;

          .slider {
            .buttons {
              top: 280px;
            }
          }
        }
      }
    }
  }

  @media screen and (min-width: 900px) {
    html {
      body {
        main {
          width: 100%;
          max-width: 1054px;
          padding: 64px 64px 64px 0;

          .slider {
            .buttons {
              right: 43%;
              top: 500px;
            }

            .slide {
              position: relative;
              text-align: left;
              display: flex;
              flex-direction: row;

              .testimonial {
                padding: 32px 0 0 0;
                background-size: 80px;
                background-position: 19% -7%;
                transform: translateX(100px);

                blockquote {
                  font-size: 24px;
                  line-height: 30px;
                }

                .author {
                  span {
                    display: contents;
                  }
                }
              }

              .slider-img {
                padding: 55px;

                img {
                  width: 400px;
                }
              }
            }
          }
        }
      }
    }
  }
`;

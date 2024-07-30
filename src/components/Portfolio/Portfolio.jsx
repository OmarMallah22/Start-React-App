import React, { Component } from "react";
import style from "./Portfolio.module.css";
import Modal from "../Modal/Modal";
import img1 from "../../images/cabin.png";
import img2 from "../../images/cake.png";
import img3 from "../../images/circus.png";
import img4 from "../../images/game.png";
import img5 from "../../images/safe.png";
import img6 from "../../images/submarine.png";

export default class Portfolio extends Component {
  state = {
    images: [
      {
        name: "LOG CABIN",
        src: img1,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
      },
      {
        name: "TASTY CAKE",
        src: img2,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
      },
      {
        name: "CIRCUS TENT",
        src: img3,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
      },
      {
        name: "CONTROLER",
        src: img4,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
      },
      {
        name: "LOCKED SAFE",
        src: img5,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
      },
      {
        name: "SUBMARINE",
        src: img6,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
      },
    ],
  };

  render() {
    return (
      <>
        <section className={style.portfololio}>
          <div className="container">
            <h2 className="head-section">Portfolio</h2>
            <div className={style.divider}>
              <i className="fa-solid fa-star"></i>
            </div>
            <div className={style.images}>
              <div className="row mt-5">
                {this.state.images.map((img, i) => (
                  <div className="col-lg-4 col-md-6 col-sm-12 mb-5 px-3">
                    <div className="portfolio-item">
                      <div
                        className={style.img}
                        data-bs-toggle="modal"
                        data-bs-target={`#index${i}`}
                      >
                        <img width="100%" src={img.src} alt="" />
                      </div>
                    </div>
                    <Modal
                      id={`index${i}`}
                      name={img.name}
                      image={img.src}
                      description={img.description}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

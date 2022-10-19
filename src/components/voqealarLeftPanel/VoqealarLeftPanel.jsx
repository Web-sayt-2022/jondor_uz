import React, { useState } from "react";
import "./voqealarLeftPanel.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import gerbImg from "../../images/gerb.png";
import x2Img from "../../images/x2.png";
import prezMurImg from "../../images/prezmur.png";
import govuzImg from "../../images/govuzlaw.png";
import govuzRectangle from "../../images/govuzRectangle.png";

const VoqealarLeftPanel = () => {
  const [value, onChange] = useState(new Date());

  return (
    <section className="voqealar-section-left bg-light mt-4">
      <div className="p-2 text-white  bg-primary mx-2 ">
        <h4
          style={{ fontSize: "1.125rem", textTransform: "uppercase" }}
          className="m-0 p-0"
        >
          Voqealar
        </h4>
      </div>

      <div className="row p-2">
        <div className="col-lg-12">
          <div className="card card-hover p-2">
            <div className="card-img-actions">
              <div className="img-scale">
                <img
                  className="img-fluid img-fluid-hover"
                  src="https://storage.kun.uz/source/thumbnails/_medium/8/j6psK3WhZryqGt8cQuT_Gp-VWBYK9cb__medium.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="card-body p-1">
              <a
                className="card-text card-text-title mt-1"
                style={{
                  textAlign: "justify",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  color: "#2a4d85",
                  fontSize: "0.8rem",
                }}
              >
                Yerlarimiz shiddat bilan ishdan chiqyapti, chunki tayinli
                Yerlarimiz shiddat bilan ishdan chiqyapti, chunki tayinli
                yo‘q...
              </a>
            </div>

            {/* <div
              className="card-footer p-2 px-2"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <a href="#" className="text-body">
                    <i className="icon-eye4 mr-2"></i>
                    438
                  </a>
                </li>
              </ul>

              <a
                href="./deteile_news.html"
                className="text-primary font-weight-semybold"
                style={{ cursor: "pointer" }}
              >
                Batafsil
                <i className="icon-arrow-right8"></i>
              </a>
            </div> */}
          </div>
        </div>

        <div className="col-lg-12">
          <div className="foydali_manba">
            <div className="foydali_manba-img">
              <img src={gerbImg} alt="" />
            </div>
            <div className="foydali_manba-text">
              <a href="">Davlat Hokimiyati</a>
            </div>
          </div>

          <div className="foydali_manba white">
            <div className="foydali_manba-img">
              <img src={x2Img} alt="" />
            </div>
            <div className="foydali_manba-text">
              <a href="">Davlat Hokimiyati</a>
            </div>
          </div>

          <div className="foydali_manba">
            <div className="foydali_manba-img">
              <img src={gerbImg} alt="" />
            </div>
            <div className="foydali_manba-text">
              <a href="">Davlat Hokimiyati</a>
            </div>
          </div>

          <div className="foydali_manba white">
            <div className="foydali_manba-img">
              <img src={x2Img} alt="" />
            </div>
            <div className="foydali_manba-text">
              <a href="">Davlat Hokimiyati</a>
            </div>
          </div>
          {/* <div className="card card-hover p-2">
            <div className="card-img-actions">
              <div className="img-scale">
                <img
                  className="img-fluid img-fluid-hover"
                  src="https://storage.kun.uz/source/8/-h8nNzcxbuzKzW8B3LK1mJi2TxFevbiU.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="card-body p-2">
              <h6 className="card-title text-primary font-weight-bold p-0 m-0">
                <i className="icon-calendar3"></i>
                13.03.2003
              </h6>
              <p
                className="card-text card-text-title mt-1"
                style={{
                  textAlign: "justify",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  color: "#2a4d85",
                  fontSize: "0.8rem",
                }}
              >
                Shri-Lankada misli ko‘rilmagan namoyishlar, prezident
                qarorgohiga bostirib kirildi. Asosiy ma’lumotlar
              </p>
            </div>

            <div
              className="card-footer p-2 px-2"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <a href="#" className="text-body">
                    <i className="icon-eye4 mr-2"></i>
                    438
                  </a>
                </li>
              </ul>

              <a
                href="./deteile_news.html"
                className="text-primary font-weight-semybold"
                style={{ cursor: "pointer" }}
              >
                Batafsil
                <i className="icon-arrow-right8"></i>
              </a>
            </div>
          </div> */}
        </div>

        <div className="col-lg-12">
          <div>
            <Calendar onChange={onChange} value={value} />
          </div>
        </div>

        <div className="col-lg-12 foydali_link-card">
          <div className="foydali_link">
            <div className="foydali_link-img">
              <img src={gerbImg} alt="image" />
            </div>
            <div className="foydali_link-text">
              <img src={prezMurImg} alt="" />
            </div>
          </div>
          <div className="foydali_link">
            <div className="foydali_link-img">
              <img src={gerbImg} alt="image" />
            </div>
            <div className="foydali_link-text">
              <img src={prezMurImg} alt="" />
            </div>
          </div>
          <div className="foydali_link">
            <div className="foydali_link-imgGreen">
              <img src={govuzImg} alt="image" />
            </div>
            <div className="foydali_link-textBlue">
              <a href="">regulation.gov.uz</a>
            </div>
          </div>
          <div className="foydali_link">
            <div className="foydali_link-img">
              <img src={govuzRectangle} alt="image" />
            </div>
            <div className="foydali_link-textWhite">
              <a href="">Davlat organlari ishonch telefonlari</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoqealarLeftPanel;

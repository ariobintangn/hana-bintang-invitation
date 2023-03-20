import "./App.css";
// import Journey from "./views/journey";
// import paper from "./assets/paper.png";
// import Guide from "./views/TravelGuide";
import opening from "./assets/opening.JPG";
import journey from "./assets/journey1.png";
import TravelGuide from "./views/TravelGuide";

import React, { useState, useEffect } from "react";

function App() {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const eventDate = new Date("May 7, 2022 16:30:00").getTime();

    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const timeDiff = now - eventDate;
      setElapsedTime(timeDiff);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const years = Math.floor(elapsedTime / (365 * 24 * 60 * 60 * 1000));
  const months = Math.floor(
    (elapsedTime % (365 * 24 * 60 * 60 * 1000)) / (30 * 24 * 60 * 60 * 1000)
  );
  const days = Math.floor(
    (elapsedTime % (30 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000)
  );
  const hours = Math.floor(
    (elapsedTime % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
  );
  const minutes = Math.floor((elapsedTime % (60 * 60 * 1000)) / (60 * 1000));
  const seconds = Math.floor((elapsedTime % (60 * 1000)) / 1000);
  return (
    <div className="bg-cgrey h-screen text-brokenWhite flex-col flex-wrap">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      {/* MAIN IMAGE */}
      <div className="container">
        <div className="relative container">
          <img src={opening} alt="main wedding" className="" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cgrey1 bg-opacity-60 h-full text-center align-middle w-full">
            <h1 class="absolute text-2xl md:text-5xl text-brokenWhite italic top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              "Love is composed of a single soul inhabiting two bodies"
            </h1>
          </div>
        </div>
      </div>

      {/* TIME CARD COUNTDOWN */}
      <div className="bg-ccream2 text-gray text-center w-full m-auto">
        <div className="container">
          <img
            src="https://irwanclaudia.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvector-cut.3158038d.png&w=3840&q=75"
            className="absolute -translate-y-20"
            alt="scrapped paper"
          />
          <div className="text-chocolate p-5">#ARIOHANA</div>
          <div className="italic text-2xl w-3/4 m-auto mt-8">
            Here's to the beginning of our forever that we would like to share
            with you!
          </div>
          <div className="flex justify-center h-20 mt-8">
            <div className="border-cgrey2 border-r-2"></div>
            <div></div>
          </div>
          <div className="text-chocolate pt-5">Count-up!</div>
          <div className="container p-4">
            <div className="flex flex-row -translate-x-3">
              <div className="bg-cgreen w-1/4 rounded-full p-3 translate-x-9 z-50">
                {years}
                <div>Years</div>
              </div>
              <div className="bg-cpeach w-1/4 rounded-full p-3 translate-x-6 z-40">
                {months}
                <div>Months</div>
              </div>
              <div className="bg-cgreen w-1/4 rounded-full p-3 translate-x-3 z-30">
                {days}
                <div>Days</div>
              </div>
              <div className="bg-cpeach w-1/4 rounded-full p-3 z-20">
                {hours}
                <div>Hours</div>
              </div>
              <div className="bg-cgreen w-1/4 rounded-full p-3 -translate-x-3 z-10">
                {minutes}
                <div>Minutes</div>
              </div>
              <div className="bg-cpeach w-1/4 rounded-full p-3 -translate-x-6">
                {seconds}
                <div>seconds</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Journey className="bg-card1 bg-cgrey text-right text-inline"/> */}

      {/* JOURNEY */}
      <div className="bg-cgrey text-left p-5 flex-col">
        <div className="text-xl">
          <div className="bg-cgrey py-2 flex items-center">
            <p>OUR JOURNEY STARTED</p>
            <img
              alt="our wedding"
              src={journey}
              // style={{ maxWidth: "100px", borderRadius: "30%" }}
              className="w-32 object-cover rounded-3xl ml-3"
            />
          </div>
          <p className="py-2">WHEN WE PLAYED MUSIC</p>
          <p className="py-2 italic">Together</p>
        </div>
        <p className="text-justify py-2">
          What started as a collaboration for Teman Jakarta's Youtube channel
          turns out to be the beginning of our story. Not long after meeting for
          the first time, our connection seems to get stronger with each passing
          day.
        </p>
        <img
          alt="our wedding 2"
          src={journey}
          // style={{ maxWidth: "80%", borderRadius: "30%"}}
          className="h-96 w-full object-cover rounded-full p-5"
        />
        <h1 className="text-2xl my-5 italic text-center">I said "I do"</h1>
        <p className="text-justify py-2">
          It's not always been an easy road to travel, as with every couple. Yet
          the more we knew each other, the more everything seems to be aligning
          together. On that fateful day in August 2021, Ario asked Hana for her
          hand in marriage, to which she said <b>"I DO!"</b>
        </p>
      </div>

      {/* GUIDE*/}
      {/* <div className="bg-cgrey2 text-gray relative flex justify-center h-full object-contain">
        <div className="w-11/12">
          <div className="bg-cpeach2 rounded-b-full relative text-center p-5 w-full z-10">
            <h1 className="py-2 text-2xl mb-3">
              WEDDING
              <br />
              WEEKEND
              <br />
              GUIDE
            </h1>
            <p className="text-md">
              HI THERE, HERE IS THE GUIDE FOR YOU
              <br />
              TO COME TO OUR WEDDING
            </p>
            <p className="italic text-sm">*All times are in WIB</p>
          </div>

          <div className="bg-cpeach rounded-t-full text-center p-5 absolute top-1/4 w-11/12">
            <div className="mt-10 p-10">
              <h1>Friday, May 6, 2022</h1>
              <button className="border-cgrey border bg-cgrey3 rounded-xl shadow-md p-1 hover:bg-cgrey hover:text-white">
                ADD TO CALENDAR
              </button>
            </div>
          </div>

          <div className="container bg-cpeach rounded text-center bottom-0 top-96 absolute w-11/12 flex-col flex-wrap">
            <div className="left-1/2 items-center object-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/fd/20_airtransportation_inv.svg"
                alt="plane"
                className="w-12 m-auto"
              />
            </div>
            <div className="">
              <p className="text-md">FAMILY ARRIVAL & CHECK IN</p>
              <p className="text-sm">GUEST HOUSE YOGYAKARTA, YOGYAKARTA</p>
              <p className="text-xs">12.00 ONWARDS</p>
            </div>
            <div className="left-1/2 items-center object-center mt-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/fd/20_airtransportation_inv.svg"
                className="w-12 m-auto"
                alt="plane"
              />
            </div>
            <div className="">
              <p>FAMILY WELCOME DINNER</p>
              <p className="text-xs">12.00 ONWARDS</p>
            </div>
          
            <div className="mt-10 p-10">
              <h1>Saturday, May 6, 2022</h1>
              <button className="border-cgrey border bg-cgrey3 rounded-xl shadow-md p-1 hover:bg-cgrey hover:text-white">
                ADD TO CALENDAR
              </button>
            </div>

            <div className="left-1/2 items-center object-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/fd/20_airtransportation_inv.svg"
                alt="plane"
                className="w-12 m-auto"
              />
            </div>
            <div className="">
              <p className="text-md">FAMILY ARRIVAL & CHECK IN</p>
              <p className="text-sm">GUEST HOUSE YOGYAKARTA, YOGYAKARTA</p>
              <p className="text-xs">12.00 ONWARDS</p>
            </div>
            <div className="left-1/2 items-center object-center mt-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/fd/20_airtransportation_inv.svg"
                className="w-12 m-auto"
                alt="plane"
              />
            </div>
            <div className="">
              <p>FAMILY WELCOME DINNER</p>
              <p className="text-xs">12.00 ONWARDS</p>
            </div>
          </div>
        </div>
      </div> */}
      {/* TRAVEL GUIDE */}
      <TravelGuide />

      <footer className="bg-cgrey1 text-center">
        <h1 className="p-5 w-60 m-auto">
          WEBSITE BY ARIO, DESIGN BY MONICADSGN
        </h1>
      </footer>
    </div>
  );
}

export default App;

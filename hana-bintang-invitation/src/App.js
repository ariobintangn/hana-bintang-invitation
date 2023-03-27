import "./App.css";
import gif from "./assets/gif.gif"
import plane from "./assets/plane.svg";
import bus from "./assets/bus.svg";
import ring from "./assets/rings.svg";
import dinner from "./assets/dinner.svg";
import location from "./assets/location.svg";
import party from "./assets/party.svg";
import party2 from "./assets/party2.svg";
import sc1 from "./assets/sc1.jpeg"
import sc2 from "./assets/sc2.jpeg"
import sc3 from "./assets/sc3.jpeg"
import sc4 from "./assets/sc4.jpeg"
import sc5 from "./assets/sc5.jpeg"
import sc6 from "./assets/sc6.jpeg"
import sc7 from "./assets/sc7.jpeg"
import sc8 from "./assets/sc8.jpeg"
import b1 from "./assets/b1.jpeg"
import b2 from "./assets/b2.jpeg"
// import bus from "./assets/bus.svg";
// import Journey from "./views/journey";
// import paper from "./assets/paper.png";
// import Guide from "./views/TravelGuide";
import opening from "./assets/opening.JPG";
import opening2 from "./assets/opening2.JPG";
import journey from "./assets/journey1.png";
import TravelGuide from "./views/TravelGuide";

import React, { useState, useEffect } from "react";

function App() {
  const handleClickScroll = () => {
    const element = document.getElementById("journey");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
    <div className="bg-cgrey h-screen text-brokenWhite flex-col flex-wrap min-w-screen">
      {/* MAIN IMAGE */}
      <div className="">
        <div className="relative">
          <img src={opening2} alt="main wedding" className="" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cgrey1 bg-opacity-60 h-full text-center align-middle w-full">
            <h1 class="absolute text-2xl md:text-5xl text-brokenWhite italic top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              "Love is composed of a single soul inhabiting two bodies"
              <p className="text-sm xl:text-xl mt-2">-Aristoteles</p>
            </h1>
          </div>
        </div>
      </div>

      {/* TIME CARD COUNTDOWN */}
      <div className="bg-ccream2 text-gray md:bg-cgreen lg:bg-cgrey1 xl:bg-cgrey text-center w-full m-auto">
        <div className="md:w-wide md:-mt-32">
          <img
            src="https://irwanclaudia.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvector-cut.3158038d.png&w=3840&q=75"
            className="-translate-y-20 md:translate-y-1 xl:-translate-y-14 md:w-full"
            alt="scrapped paper"
          />
          <div className="text-chocolate p-5 font-semibold">#ARIOHANA</div>
          <div className="italic text-2xl w-3/4 m-auto mt-8">
            Here's to the beginning of our forever that we would like to share
            with you!
          </div>
          <div className="flex justify-center h-48 mt-8 mb-4">
            <div className="border-cgrey2 border-r-2"></div>
            <div></div>
          </div>

          <div className="text-chocolate pt-5 pb-2 font-bold">
            Love shared since May 7th, 2022:
          </div>

          <div className="p-4 pb-8 max-w-md m-auto font-semibold">
            <div className="flex -translate-x-3">
              <div className="bg-cgreen w-1/6 rounded-full text-sm p-3 translate-x-9 z-50">
                {years}
                <div>Years</div>
              </div>
              <div className="bg-cpeach w-1/6 rounded-full text-sm p-3 translate-x-6 z-40">
                {months}
                <div>Months</div>
              </div>
              <div className="bg-cgreen w-1/6 rounded-full text-sm p-3 translate-x-3 z-30">
                {days}
                <div>Days</div>
              </div>
              <div className="bg-cpeach w-1/6 rounded-full text-sm p-3 z-20">
                {hours}
                <div>Hours</div>
              </div>
              <div className="bg-cgreen w-1/6 rounded-full text-sm p-3 -translate-x-3 z-10">
                {minutes}
                <div>Minutes</div>
              </div>
              <div className="bg-cpeach w-1/6 rounded-full text-sm p-3 -translate-x-6">
                {seconds}
                <div>seconds</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Journey className="bg-card1 bg-cgrey text-right text-inline"/> */}

      {/* JOURNEY */}

      <div className="text-brokenWhite">
        <div className="relative">
          <img src={opening} alt="main wedding" className="" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cgrey1 bg-opacity-60 h-full text-center align-middle w-full">
            <div className="absolute top-60 md:top-80 xl:top-1/2 xl:-translate-y-80 left-1/4">
              <h1 className="text-2xl md:text-5xl xl:text-7xl  -translate-x-1/2 -translate-y-1/2">
                Ario
              </h1>
              <h1 className="text-2xl md:text-5xl xl:text-7xl  -translate-x-1/4 -translate-y-1/2">
                Bintang
              </h1>
              <h1 className="text-2xl md:text-5xl xl:text-7xl  pl-5 -translate-x-1/2 -translate-y-1/2">
                Nugraha
              </h1>
            </div>
            <div className="absolute top-1/2 left-1/2">
              <h1 className="text-5xl md:text-5xl  -translate-x-1/2 -translate-y-1/2">
                &
              </h1>
            </div>
            <div className="absolute bottom-60 md:bottom-80 xl:top-1/2 xl:translate-y-60  left-3/4">
              <h1 className="text-2xl md:text-5xl xl:text-7xl  -translate-x-1/4 -translate-y-1/2">
                Hana
              </h1>
              <h1 className="text-2xl md:text-5xl xl:text-7xl  -translate-x-1/2  -translate-y-1/2">
                Kusumawardhani
              </h1>
            </div>
            <div className="absolute bottom-20 left-1/2">
              <h1 className="text-md md:text-3xl xl:text-4xl italic -translate-x-1/2 -translate-y-1/2">
                Let us tell you our love story..
              </h1>
            </div>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
              <button onClick={handleClickScroll}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*JOURNEY 2*/}

      <div className="" id="journey">
        <div className="bg-cgrey1 text-left p-5 flex-col md:p-16 xl:px-36">
          <div className="text-2xl md:text-5xl lg:text-7xl">
            <div className="py-2 flex items-center">
              <p>OUR JOURNEY STARTED</p>
              <img
                alt="our wedding"
                src={gif}
                className="w-32 object-cover rounded-3xl ml-3"
              />
            </div>
            <p className="py-2">WHEN WE PLAYED MUSIC</p>
            <p className="py-8 italic">Together</p>
          </div>
          <p className="text-justify py-2 md:text-xl xl:pr-48 xl:py-20 xl:text-2xl">
            What started as a collaboration for Teman Jakarta's Youtube channel
            turns out to be the beginning of our story. Not long after meeting
            for the first time, our connection seems to get stronger with each
            passing day.
          </p>
          <img
            alt="our wedding 2"
            src={sc1}
            // style={{ maxWidth: "80%", borderRadius: "30%"}}
            className="h-96 w-full object-cover rounded-full p-5"
          />
          <h1 className="text-2xl md:text-3xl my-5 italic text-center">
            I said "I do"
          </h1>
          <p
            className="md:text-xl text-justify py-2 xl:text-left xl:pr
          -36 xl:pt-20 xl:text-2xl"
          >
            It's not always been an easy road to travel, as with every couple.
            Yet the more we knew each other, the more everything seems to be
            aligning together. On that fateful day in August 2021, Ario asked
            Hana for her hand in marriage, to which she said <b>"I DO!"</b>
          </p>
        </div>
      </div>

      {/* GUIDE*/}
      <div className="bg-cgrey2 text-gray relative flex flex-col justify-center items-center object-contain md:text-xl">
        <div className="w-11/12 lg:w-7/12">
          <div className="bg-cpeach2 rounded-b-full relative text-center p-5 w-full z-10 pb-10 md:h-96 md:pt-16 ">
            <h1 className="py-2 text-4xl mb-3 md:text-5xl">
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

          {/*----------------SCHEDULE-----------------*/}

          <div className="bg-cpeach rounded-t-full text-center p-5  top-1/4 -mt-24 md:p-24">
            <div className="mt-10 pt-16">
              <h1>Friday, May 6, 2022</h1>
              <button className="border-cgrey border bg-cgrey3 rounded-xl shadow-md mt-2 p-1 hover:bg-cgrey hover:text-white">
                ADD TO CALENDAR
              </button>
            </div>
            <div className="left-1/2 items-center object-center my-4">
              <img
                src={plane}
                // src="https://upload.wikimedia.org/wikipedia/commons/f/fd/20_airtransportation_inv.svg"
                alt="plane"
                className="w-12 m-auto"
              />
            </div>
            <div className="">
              <p className="text-md">Family Arrival & Check In</p>
              <p className="text-sm">GUEST HOUSE YOGYAKARTA, YOGYAKARTA</p>
              <p className="text-xs">12.00 ONWARDS</p>
            </div>
            <div className="left-1/2 items-center object-center mt-4">
              <img src={dinner} className="w-12 m-auto" alt="plane" />
            </div>
            <div className="">
              <p>Family Welcome Dinner</p>
              <p className="text-xs">18.30 WIB</p>
            </div>

            {/* -------------------- */}

            <div className="mt-10 py-10 mx-16 border-t-2 border-cgrey">
              <h1>Saturday, May 6, 2022</h1>
              <div className="my-2">
                <a
                  className="text-xs underline"
                  href="https://goo.gl/maps/ZFqEnquZnH5D7jqK9"
                  target="_blank"
                  rel="noreferrer"
                >
                  Secret Garden Yogyakarta
                  <img
                    src={location}
                    width="15px"
                    className="inline -translate-y-1"
                    alt="location"
                  />
                </a>
              </div>
              <button className="border-cgrey border bg-cgrey3 rounded-xl shadow-md mt-2 p-1 hover:bg-cgrey hover:text-white">
                ADD TO CALENDAR
              </button>
            </div>

            <div className="left-1/2 items-center object-center">
              <img src={ring} alt="plane" className="w-12 m-auto" />
            </div>
            <div className="">
              <p>Holy Matrimony</p>
              <p className="text-xs">16.30 WIB</p>
            </div>
            <div className="left-1/2 items-center object-center mt-4">
              <img src={party} className="w-12 m-auto" alt="party" />
            </div>
            <div className="">
              <p>Party & Reception</p>
              <p className="text-xs">17.30 ONWARDS</p>
            </div>
            <div className="left-1/2 items-center object-center mt-4">
              <img src={party2} className="w-12 m-auto" alt="party2" />
            </div>
            <div className="">
              <p>After Party</p>
              <p className="text-xs">21.00 ONWARDS</p>
            </div>
          </div>
        </div>
      </div>

      {/* TRAVEL GUIDE */}

      <div className="text-brokenWhite bg-cgrey1 w-full text-center md:h-full md:py-36">
        {/* <div className="container m-auto"> */}
        <h1 className="text-3xl p-5 md:pb-24 md:pt-0 md:text-7xl">TRAVEL GUIDE</h1>

        <div className="md:container md:w-11/12 xl:w-3/4 md:flex md:flex-row md:m-auto md:overflow-x-auto xl:translate-x-20 md:pt-12">
          <div>
            <div className="w-80 m-auto p-3">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/d2/White_plane_icon.svg"
                alt="plane"
                className="m-auto w-12 pb-2"
              />
              <h1 className="p-1">GETTING THERE</h1>
              <p className="pb-3">
                We encourage you to book your own flight ticket to Yogyakarta
              </p>
            </div>
          </div>
          <div>
            <div className="w-80 m-auto p-3">
              <img
                src="https://www.pngfind.com/pngs/m/144-1449175_png-file-svg-logo-hotel-vector-png-transparent.png"
                alt="hotel"
                className="m-auto w-12 pb-2 rounded-md"
              />
              <h1 className="p-1 pb-3">COMPLIMENTARY ACCOMODATION</h1>
              <p className="pb-1">
                <b>Friends</b>
              </p>
              <p className="pb-1">Sheraton Hotel, Yogyakarta</p>
              <p className="pb-3 text-sm italic">
                2 Nights (May 6 - May 7, 2022)
              </p>
              <p className="pb-1">
                <b>Family</b>
              </p>
              <p className="pb-1">Royal Ambarukmo Yogyakarta</p>
              <p className="pb-3 text-sm italic">
                3 Nights (May 5 - May 7, 2022)
              </p>
            </div>
          </div>
          <div>
            <div className="w-80 m-auto p-3">
              <img
                src={bus}
                alt="bus"
                className="m-auto w-12 p-1 bg-white rounded-full"
              />
              <h1 className="p-1">COMPLIMENTARY SHUTTLE</h1>
              <p className="pb-3 text-sm">
                There will be a complimentary shuttle from your hotel to the
                venue
              </p>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
      {/* <TravelGuide /> */}

      {/*QNA*/}

      <div className="bg-ccream text-gray flex flex-col md:flex-row md:h-full">
        <div className="md:bg-gradient-to-r md:from-cgrey3 md:through md:to-ccream2 overflow-clip md:w-1/2">
          <div className="container p-5 m-auto justify-center align-middle items-center flex flex-row md:pt-0 md:flex-col overflow-auto">
            <div className="border-l-4 border-y-4 border-cgrey1 md:border-transparent w-1/3 md:h-1/3 md:w-full md:hidden">
            <img src={sc5} className=" object-fit" />
            
            </div>
            <div className="border-4 border-cgrey1 md:border-transparent w-1/3 md:h-1/3 md:w-full">
            <img src={sc3} className="md:object-none"/>
            </div>
            <div className="border-4 border-l-0 border-cgrey1 md:border-transparent w-1/3 md:h-1/3 md:w-full md:hidden">
            <img src={sc6} className=" object-contain" />
            </div>
          </div>
        </div>

        <div
          className="p-10 md:p-12 lg:px-24 xl:ml-36 xl: md:overflow-y-auto md:w-7/12"
          id="QNAContainer"
        >
          <div className="text-4xl">QUESTION AND ANSWER</div>
          <div className="container mt-12" id="qnaItemsContainer">
            <div className="flex flex-row  border-b border-black pb-4">
              <div id="container-header" className="text-3xl mr-2">
                01
              </div>
              <div id="container-header" className="pt-1 text-lg">
                WHAT KIND OF OUTFIT SHOULD / SHOULDN'T I WEAR?
              </div>
            </div>
            <div id="container-content" className="pt-6">
              Be handsome and beautiful, being ugly is not tolerated (Just
              Kidding). Calling all Ladies! Long dresses are preferred and
              please wear comfortable shoes. Get ready to be dancing all night
              with booze involved.
            </div>
            <div className="mt-10">
              Here are the color options for your dress
              <br />
              <div className="flex flex-row mt-6 justify-center -translate-x-2">
                <div className="h-10 w-10 mx-2 bg-gray-800 rounded-full"></div>
                <div className="h-10 w-10 mx-2 bg-gray-600 rounded-full"></div>
                <div className="h-10 w-10 mx-2 bg-amber-900 rounded-full"></div>
                <div className="h-10 w-10 mx-2 bg-yellow-600  rounded-full"></div>
                <div className="h-10 w-10 mx-2 bg-red-100 rounded-full"></div>
                <div className="h-10 w-10 mx-2 bg-amber-50 rounded-full"></div>
              </div>
              <p className="mt-10 mb-5">
                For the Gentlemen, suit up. <br />
              </p>
              <p>
                Kindly leave your batik, jeans, t-shirt, and slippers at home.
              </p>
            </div>
          </div>

          <div className="container mt-12" id="qnaItemsContainer">
            <div className="flex flex-row border-b border-black pb-4">
              <div id="container-header" className="text-3xl mr-2">
                02
              </div>
              <div id="container-header" className="pt-1 text-lg">
                CAN I BRING A DATE OR +1?
              </div>
            </div>
            <div id="container-content" className="pt-6">
              Unless it is stated in the invitation message or communicated
              privately, this invitation is only valid for 1 pax.
            </div>
          </div>

          <div className="container mt-12" id="qnaItemsContainer">
            <div className="flex flex-row border-b border-black pb-4">
              <div id="container-header" className="text-3xl mr-2">
                03
              </div>
              <div id="container-header" className="pt-1 text-lg">
                WILL THE WEDDING BE INDOOR OR OUTDOOR?
              </div>
            </div>
            <div id="container-content" className="pt-6">
              Holy matrimony will be held indoor, reception and party will be
              held outdoor.
            </div>
          </div>

          <div className="container mt-12" id="qnaItemsContainer">
            <div className="flex flex-row border-b border-black pb-4">
              <div id="container-header" className="text-3xl mr-2">
                04
              </div>
              <div id="container-header" className="pt-1 text-lg">
                WHAT ACCOMODATIONS ARE PROVIDED?
              </div>
            </div>
            <div id="container-content" className="pt-6">
              Flight ticket will not be provided. Hotel and round trip shuttle
              bus will be provided. Please check out the "Travel Guide" section.
            </div>
          </div>

          <div className="container mt-12" id="qnaItemsContainer">
            <div className="flex flex-row border-b border-black pb-4">
              <div id="container-header" className="text-3xl mr-2">
                05
              </div>
              <div id="container-header" className="pt-1 text-lg">
                WHAT TYPE OF WEDDING GIFT SHOULD I BRING?
              </div>
            </div>
            <div id="container-content" className="pt-6">
              Your presence at our wedding is the greatest gift of all. However,
              if you wish to honour us with a special something, cash / small
              gift will be accepted with full gratitude.
            </div>
          </div>

          <div className="container mt-12" id="qnaItemsContainer">
            <div className="flex flex-row border-b border-black pb-4">
              <div id="container-header" className="text-3xl mr-2">
                06
              </div>
              <div id="container-header" className="pt-1 text-lg">
                WHOM SHOULD I REACH FOR FURTHER QUESTIONS?
              </div>
            </div>
            <div id="container-content" className="pt-6">
              Ario and Hana
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-cgrey1 text-center">
        <h1 className="p-5 w-60 m-auto">
          WEBSITE BY ARIO, DESIGN BY MONICADSGN
        </h1>
      </footer>
    </div>
  );
}

export default App;

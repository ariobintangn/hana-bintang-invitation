import "./App.css";
// import Journey from "./views/journey";
import journey from "./assets/journey1.png";

function App() {
  return (
    <div className="bg-cgrey h-screen text-brokenWhite flex-col flex-wrap">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
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
              className="w-32 object-cover rounded-3xl"
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
      <div className="bg-cgrey2 text-gray relative flex justify-center h-full">
        <div className="h-full w-11/12">
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

          <div className="bg-cpeach rounded text-center bottom-0 top-96 absolute w-11/12 flex-col flex-wrap">
            <div className="left-1/2 items-center object-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/fd/20_airtransportation_inv.svg"
                className="w-12"
              />
            </div>
            <div className="">
              <h1>FAMILY ARRIVAL & CHECK IN</h1>
              <h2>GUEST HOUSE YOGYAKARTA, YOGYAKARTA</h2>
              <h2>12.00 ONWARDS</h2>
            </div>
            <div className="left-1/2 items-center object-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/fd/20_airtransportation_inv.svg"
                className="w-12"
              />
            </div>
            <div className="">
              <h1>FAMILY WELCOME DINNER</h1>
              <h2>12.00 ONWARDS</h2>
            </div>

            <div className="mt-10 p-10">
              <h1>Saturday, May 6, 2022</h1>
              <button className="border-cgrey border bg-cgrey3 rounded-xl shadow-md p-1 hover:bg-cgrey hover:text-white">
                ADD TO CALENDAR
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

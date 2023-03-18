import "./App.css";
// import Journey from "./views/journey";
import journey from "./assets/journey1.png";

function App() {
  return (
    <div className="bg-card2 h-full text-brokenWhite">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      {/* <Journey className="bg-card1 bg-card2 text-right text-inline"/> */}

      {/* JOURNEY */}
      <div className="bg-card2 border border-black text-left p-5 flex-col">
        <div className="text-xl">
          <div className="bg-card2 py-2 flex items-center">
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

      {/* I SAID I DO */}
      <div className="h-1/2 bg-card3 text-gray relative flex justify-center">
        <div className="h-full w-11/12">
          <div className="bg-card4 rounded-b-full text-center p-5 w-full overflow-hidden">
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

          <div className="bg-card5 h-full rounded-t-3xl text-center p-5">
            <h1>Saturday, May 7, 2022</h1>
            <button className="border-card4 border">ADD TO CALENDAR</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

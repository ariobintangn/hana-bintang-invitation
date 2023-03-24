import "../App.css";
import bus from "../assets/bus.svg"

function TravelGuide() {
  return (
    <>
      <div className="text-brokenWhite bg-cgrey1 w-full text-center">
        <div className="container m-auto">
          <h1 className="text-3xl p-5">TRAVEL GUIDE</h1>

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

          <div className="w-80 m-auto p-3">
            <img
              src={bus}
              alt="bus"
              className="m-auto w-12 p-1 bg-white rounded-full"
            />
            <h1 className="p-1">COMPLIMENTARY SHUTTLE</h1>
            <p className="pb-3 text-sm">
              There will be a complimentary shuttle from your hotel to the venue
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TravelGuide;

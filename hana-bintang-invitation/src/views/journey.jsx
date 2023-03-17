import journey from "../assets/journey1.png";

function Journey() {
  return (
    <>
      <div className="bg-card1 w-full flex-row">
        <p className="">This is from Journey</p>
        <div className="bg-card1">
        <p>OUR JOURNEY</p>
        <img class="inline" alt="our wedding" src={journey} style={{ maxWidth: "100px",borderRadius:"30%" }} />
        </div>
        <p>STARTED</p>
        <p>WHEN WE PLAYED MUSIC</p>
        <p>Together</p>

        <p>What started as a collaboration for Teman Jakarta's Youtube channel turns out to be the beginning of our story. Not long after meeting for the first time, our connection seems to get stronger with each passing day.</p>
      </div>
    </>
  );
}

export default Journey;

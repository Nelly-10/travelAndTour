import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent trip</h1>
      <p>You can discover unique destinations using googgle maps</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip in indonesia"
          text="Indonesia, officially, the republic of indonesia is a country in southeast Asia and oceania between the Indian and pacific oceans. It consists of over 17,000 islands, including sumatra, java, Sulawesi and part of Borneo and New Guinea."
        />

        <TripData
          image={Trip2}
          heading="Trip in Malaysia"
          text="Indonesia, officially, the republic of indonesia is a country in southeast Asia and oceania between the Indian and pacific oceans. It consists of over 17,000 islands, including sumatra, java, Sulawesi and part of Borneo and New Guinea."
        />

        <TripData
          image={Trip3}
          heading="Trip in France"
          text="Indonesia, officially, the republic of indonesia is a country in southeast Asia and oceania between the Indian and pacific oceans. It consists of over 17,000 islands, including sumatra, java, Sulawesi and part of Borneo and New Guinea."
        />
      </div>
    </div>
  );
}

export default Trip;

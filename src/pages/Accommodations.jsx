import { Card, PrimaryButton } from "../components/";

const longurl =
  "https://www.tripadvisor.com/Hotel_Review-g55592-d1156651-" +
  "Reviews-Hillside_Boutique_Hotel-Castroville_Texas.html";

const items = [
  {
    image: { src: "./bungalows.jpg", alt: "bungalows" },
    header: "Coastal Escapes",
    content: `These coastal escapes are for you! Enjoy your coastal views from 
              the kitchen or anywhere in the house!`,
    footer: (
      <PrimaryButton to="https://www.cambriavacationhouses.com/" newtab={true}>
        Check These Out!
      </PrimaryButton>
    ),
  },
  {
    image: { src: "./boutique-hillside.jpg", alt: "boutique hillside" },
    header: "Boutique Hill Side",
    content: `These boutiques will blow your mind! Watch the stars from the 
              veranda or a chair settled on the roof!`,
    footer: (
      <PrimaryButton to={longurl} newtab={true}>
        Check These Out!
      </PrimaryButton>
    ),
  },
  {
    image: { src: "./heritage-inns.jpg", alt: "heritage inns" },
    header: "Heritage Inns & Guesthouses",
    content:
      "These Heritage Inns and Guesthouses will welcome you and you " +
      "will be transported to another world. One called paradise.",
    footer: (
      <PrimaryButton to="https://www.historichotels.org/us/" newtab={true}>
        Check these out!
      </PrimaryButton>
    ),
  },
];

function Accommodations() {
  return (
    <div className="accommodations-page">
      <div className="hero-image-container">
        <img src="./bungalows.jpg" alt="bungalows" className="hero-image" />
        <div className="hero-overlay">
          <h1>Accommodations</h1>
          <p>Paradise stays...</p>
        </div>
      </div>
      <div className="container accommodations-header">
        <h1>Accommodations</h1>
        <p>
          From coastal escapes, to boutique hillside, and heritage inns &
          gueshouses, any stay here on Taniti Island will prove to be paradise
          home
        </p>
      </div>
      <div className="container accommodations-content">
        {items.map((v, idx) => (
          <Card
            key={idx}
            image={v.image}
            header={v.header}
            content={v.content}
            footer={v.footer}
          />
        ))}
      </div>
    </div>
  );
}

export default Accommodations;

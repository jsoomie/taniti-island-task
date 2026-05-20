import { Card, PrimaryButton } from "../components/";

const items = [
  {
    image: { src: "./coral-gardens.jpg", alt: "coral garden" },
    header: "Coral Gardens",
    content: `Dive into a vibrant underwater metropolis just off the 
          Taniti's Island southern coast. The Coral Gardens offer world-class 
          snorkeling and scuba diving, where crystal-clear turquoise waters 
          reveal a cavalcade of colors and sea animals such as sea turtles, 
          manta rays, and reef formations.`,
    footer: (
      <PrimaryButton to="https://coralgardeners.org/" newtab={true}>
        Check These Out!
      </PrimaryButton>
    ),
  },
  {
    image: { src: "./canopy-trails.jpg", alt: "canopy trails" },
    header: "Canopy Trails",
    content: `Trade the shoreline for the shade of the emerald jungle on 
          the island's premier eco-adventure trail. This winding trek takes you
          beneath giant ferns and ancient hardwoods, surrounded by the class of 
          exotic birds  and the gentle rustle of the tropical breeze. The reward
          at the end of the canopy hike is a multi-tiered hidden 
          waterfall that tumbles into a freshwater swimming pool.`,
    footer: (
      <PrimaryButton
        to="https://en.wikipedia.org/wiki/Canopy_walkway"
        newtab={true}
      >
        Check These Out!
      </PrimaryButton>
    ),
  },
  {
    image: { src: "./artisan-market.jpg", alt: "artisan market" },
    header: "Artisan Markets & Local Foods",
    content: `Immerse yourself in the colorful local life at 
          the bustling open-air market located in the main village. Every 
          afternoon, the waterfront boardwalk is bustling with local 
          woodcarvers, weavers, and artists displaying hand-crafted treasures 
          alongside stalls filled with exotic fresh coconuts, smaple local 
          street food, and watch the water taxis and skiffs dance across the 
          harbor as the sun begins to dip.`,
    footer: (
      <PrimaryButton
        to="https://en.wikipedia.org/wiki/Art_market"
        newtab={true}
      >
        Check These Out!
      </PrimaryButton>
    ),
  },
];

function Attractions() {
  return (
    <div className="attractions">
      <div className="hero-image-container">
        <img
          src="./attractions-main.jpg"
          alt="island view"
          className="hero-image"
        />
        <div className="hero-overlay">
          <h1>Attractions</h1>
          <p>How to get around on the island...</p>
        </div>
      </div>

      <div className="container headers">
        <h1>Attractions</h1>
        <p>
          Exploring the island offers a perfect balance of pulse-pounding
          adventure and deep tropical relaxation. The crystal-clear water act as
          a vibrant playground, where you can snorkel or dive among brilliant
          coral reefs, paddleboard through quiet mangrove forests, or kayak into
          glowing bioluminescent bays after dark. On land, the adventure
          continues with the scenic hiking trails that wind through lush jungle
          canopies, leading to hidden cascading waterfalls and panoramic
          clifftop lookouts. For a taste of local culture, the bustling harbor
          village invites you to wander thorugh open-air artisan markets, sample
          fresh-caught seafood at lively waterfront bistros, and experience the
          rich heritage of the Taniti Islands!
        </p>
      </div>

      <div className="container content">
        {items.map((item, index) => (
          <Card
            key={index}
            image={item.image}
            header={item.header}
            content={item.content}
            footer={item.footer}
          />
        ))}
      </div>
    </div>
  );
}

export default Attractions;

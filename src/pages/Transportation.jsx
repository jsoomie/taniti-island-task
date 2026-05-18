import { Card, PrimaryButton } from "../components/";

const items = [
  {
    image: { src: "./golf-cart.jpg", alt: "golf cart in city" },
    header: "Land Travel",
    content: `Slower, open-air pace. The most popular way to get around is
          by renting an electric golf cart, which offers the ultimate freedom 
          to effortlessly cruise along coastal roads, park by the sand, and
          explore hidden beach coves at your own leisure. For those looking for 
          a bit more agility, mopeds and e-bikes are perfect for navigating the
          winding jungle paths and catching panoramic views at the island's top
          lookouts.`,
    footer: (
      <PrimaryButton to="https://en.wikipedia.org/wiki/Hiking" newtab={true}>
        Check These Out!
      </PrimaryButton>
    ),
  },
  {
    image: { src: "./boat-square.jpg", alt: "boat views" },
    header: "Navigate the Seas",
    content: `On Taniti Island, the ocean is the ultimate highway. Water
            taxis are the local shuttle of choice, effortlessly whisking you
            across turquoise shallows to secluded resorts and hidden coves. For
            a more luxurious day on the water, you can board a sleek chartered
            catamaran to skim past dramatic coastlines, snorkel vibrant reefs,
            or catch a spectacular sunset from the open sea.`,
    footer: (
      <PrimaryButton to="https://en.wikipedia.org/wiki/Hiking" newtab={true}>
        Check These Out!
      </PrimaryButton>
    ),
  },
];

function Transportation() {
  return (
    <div className="transportation">
      <div className="hero-image-container">
        <img
          src="./transportation.jpg"
          alt="boats on the water"
          className="hero-image"
        />
        <div className="hero-overlay">
          <h1>Transportation</h1>
          <p>Navigate the seas and land...</p>
        </div>
      </div>
      <div className="container transportation-header headers">
        <h1>Transportation</h1>
        <p>
          Getting around Taniti Island is an open-air experience designed to
          keep you connected to the scenery, featuring a low-impact mix of land
          and sea transit. On land, you can effortlessly navigate winding
          coastal roads and jungle paths using electric golf carts, mopeds, or
          eco-friendly e-bikes and beach cruisers. Beacause the ocean serves as
          the primary highway, water travel is just as essential; local water
          taxis act as the main shuttle system to whisk you away to isolated
          coves, while private catamaran charters are readily available for
          custom snorkeling and sunset excursions.
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

export default Transportation;

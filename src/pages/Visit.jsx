import { HeroContent, Card, PrimaryButton } from "../components/";

const items = [
  {
    header: "Accommodations",
    content: "Everything you need to know about logding here on Taniti Island!",
    footer: <PrimaryButton to="/accommodations">Accommodations</PrimaryButton>,
    image: { src: "./home-square.jpg", alt: "home" },
  },
  {
    header: "Transportation",
    content: `Everything you need to know about Taniti Island's Transportation! 
    Via land or sea!`,
    footer: <PrimaryButton to="/transportation">Transportation</PrimaryButton>,
    image: { src: "./boat-square.jpg", alt: "boat" },
  },
  {
    header: "Attractions",
    content: `Everything you need to know about some of the attractions 
              available to you on Taniti Island!`,
    footer: <PrimaryButton to="/attractions">Attractions</PrimaryButton>,
    image: { src: "./artisan-market.jpg", alt: "artisan market" },
  },
];

function Visit() {
  return (
    <div className="visit">
      <HeroContent
        title="Visit The Island of Taniti"
        subtitle=""
        buttonText="FAQs About Taniti Islands"
        to="/FAQ"
      />
      <div className="container">
        <div className="headers">
          <h1>The Islands of Taniti</h1>
          <p>Find yourself here...</p>
        </div>

        <div className="container content">
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
    </div>
  );
}

export default Visit;

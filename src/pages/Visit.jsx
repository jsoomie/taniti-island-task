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
          <h1>Welcome to Paradise</h1>
          <h3>Your Ulimate Island Escape Awaits</h3>
          <p>
            Disconnection isn't a luxury here, it's a way of life. From the
            moment you step off the boat or plane, the rhythm of the tides takes
            over. Whether you're here to trek through hidden coastal trails,
            dive into pristine waters, or just watch the horizon fade from gold
            to violet with your toes in the sand, you've found your destination.
            <br />
            <br />
            Pack light. Breathe deep. Leave the mainland behind.
          </p>
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

const items = [
  {
    question: "What is the best time of year to visit?",
    answer: `
            The best time to visit Taniti Island is between November and
            April during the dry season. You'll enjoy sunny skies, clam
            waters, and ideal beach conditions with very little rainfall.
            `,
  },
  {
    question: "How do I get to the island?",
    answer: `
            The island is accessible by direct flights from most major
            cities to our local airport, Taniti's International. It is
            followed by a short 15-minute shuttle ride to your resort
            depending on which resort you choose. Ferry services are also
            available from the mainland.
            `,
  },
  {
    question: "Is Taniti Island family friendly?",
    answer: `
            Absolutely! We have activities for all ages including
            snorkeling, glass-bottom boat tours, beach volleyball, and a
            dedicated kids club with supervised activities for children ages
            4 and up.
            `,
  },
  {
    question: "What currency is used on Taniti Island?",
    answer: `
            Taniti Island has its own local currency called Island Dollars.
            However it is very rarely used in the busy cities especially
            where tourists roam. US dollars is widely used and accepted on
            Taniti Island! Also, most major credit cards are also accepted
            at all restaurants, resorts, and food stalls. Do not be afraid
            of what you have, there are plenty of conversion and exchange
            businesses all around! If you are in need of help, locals are
            more than happy to help and point you in the right direction!
            `,
  },
  {
    question: "Is the water safe to drink?",
    answer: `
            We recommend drinking bottle water during your stay. All resorts
            and provide complimentary bottled water and most restaurants
            serve filtered water as standard.
            `,
  },
  {
    question: "Do I need a visa to visit?",
    answer: `
            Most visitors do not require a visa for stays under 30 days. We
            recommend checking with your local embassy or consult prior to
            travel to confirm requirements for your specific nationality.
            `,
  },
  {
    question: "What should I pack?",
    answer: `
            Resort clothing, light breathable clothing, sunscreen, insect
            repellant, a hat, and comfortable walking shoes are essentials.
            If you plan on hiking or exploring the jungle, long pants and
            sturdy shoes are recommended.
            `,
  },
  {
    question: "Are there vegetarian or vegan dining options?",
    answer: `
            Yes! Most restaurants on the island offer a wide variety of
            plant-based dishes inspired by local cuisines. SImply inform
            your server of any dietary requirements and they will be happy
            to accommodate you!
            `,
  },
  {
    question: "Is there WiFi available?",
    answer: `
            Tipping is not mandatory but is always appreciated. A gratuity
            of 10-15% is customary at restaurants and for tour guides. Some
            resorts include a service charge in the bill os it is worth
            checking before adding an addtional tip.
            `,
  },
  {
    question: "What is the tipping etiquette?",
    answer: `
            Tipping is not mandatory but is always appreciated. A gratuity
            of 10-15% is customary at restaurants and for tour guides. Some
            resorts include a service charge in the bill os it is worth
            checking before adding an addtional tip.
            `,
  },
];

function FAQ() {
  return (
    <div className="faq">
      <div className="blurb">
        <h1>Got Questions? We Got Answers! FAQs!</h1>
        <p>
          Welcome to Taniti's Island FAQ hub! Before you pack your bags and set
          your watch to island time, we know you might have a few questions
          about how things work in our slice of paradise. Whether you're curious
          about how to reserve an electric golf cart, wondering which water taxi
          takes you to the hidden coves, or trying to pick the perfect overwater
          bungalow, we've gathered all the essential details right here. Browse
          through our most requently asked questions below to get all the
          insider tips and logistics you need for a seamless, stress-free
          escape.
        </p>
      </div>

      <div className="faq-container">
        <div className="faq-layout container">
          <div className="faq-left">
            <h1>FAQs</h1>
            <p>Taniti Island's Frequently asked questions</p>
          </div>

          <div className="faq-right">
            {items.map((faq, index) => (
              <div key={index} className="faq-content">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;

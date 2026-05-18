import { HeroContent, PrimaryButton } from "../components/";

function Home() {
  return (
    <div className="home">
      <HeroContent
        title="Welcome to Taniti"
        subtitle="Your Paradise Awaits..."
        buttonText="Explore Taniti Island"
        to="/visit"
      />

      <div className="blurb">
        <p>
          Welcome to your ultimate island escape. A paradise that knows no
          bounds. A sanctuary where emerald canopy of the jungle meets the
          infinite blue of the sea. Taniti Island is more than just a place to
          stay; it is a sensory experience designed to detach you from the
          frantic pace of modern life and reconnect you with the natural world.
          From the moment you arrive, the air carries the scent of salt spray
          and wild hibiscus, signaling that you have offically entered a realm
          governed by the sun and the tides.
        </p>
        <p>
          Whether you are seeking the thrill of exploring hidden sea caves, the
          quietude of a sunrise yoga session on a secluded cove, or the simple
          joy of a perfectly prepared local meal, the island offers a bespoke
          rhythm for every traveler. Here, the "to-do list" is replaced by the
          gentle pull of discovery. Navigating coastal paths, diving into
          vibrant coral gardens, or simply watching the horizon from your
          swaying hammock, every corner of this paradise has been preserved to
          offer an authentic glimpse of paradise. Prepare to slow down, breathe
          deeper, and lose yourself in the timeless beauty of the tropics.
        </p>
        <PrimaryButton to="/FAQ">FAQs About Taniti Island</PrimaryButton>
      </div>
      <div className="homepage-content-container">
        <div className="homepage-content">
          <img src="/boat-square.jpg" alt="boat on water" />
          <div>
            <h1>Transportation</h1>
            <p>
              Navigating a tropical getaway requires a shift in pace, where the
              journey across the island is often as nice as the destination
              itself. Because Taniti's island infrustructure favors the
              preservation of natural beauty, transportation usually leans
              towards small, nimble, open-air options that allows you to soak in
              the sea air and majestic island views!
            </p>
            <h3>On Land: Ground Exploration</h3>
            <p>
              The most popular way to traverse the coastal raods and interior
              rainforest paths is via electric carts, mopeds, and other more
              extreme options available! These vehicles offer the ultimate
              flexibility for spontaneous stops at hidden overlooks or local
              fruit stands. Especially those aren't easily accessible by foot.
              For those looking to keep things eco-friendly and active,{" "}
              <b>beach cruisers</b> and <b>e-bikes</b> will be avaialable. On
              larger islands and cities, you may find "safari buses"--converted
              open-air trucks that serve as vibrant, social way to move between
              major hubs!
            </p>
            <h3>By Sea: The Sea Captains</h3>
            <p>
              Since the ocean is the main highway for the Taniti Island,{" "}
              <b>boats are essential to the overall experience.</b>
            </p>
            <ul>
              <li>
                <b>Water Taxis:</b> These serve as the local "shuttle" service,
                whisking guests from the main harbor to secluded resorts or
                private coves that aren't accessible by land.
              </li>
              <li>
                <b>Chartered Catamarans:</b> For more personalized itinerary,
                private charters allow you to spend the day snorkeling remote
                areas or catching the sunset from the offshore perspective.
              </li>
              <li>
                <b>Traditional Skiffs:</b> Many islands still utilize classic
                wooden long-tail boats or dories, offering an authentic and
                rhthmic way to explore the coastline's many inlets.
              </li>
            </ul>
            <p>
              Whether you're navigating the narrow jungles in a golf cart or
              surfing over rainbow fish, the transportation here is designed to
              keep you connected to the elements.
            </p>
            <PrimaryButton to="/transportation" className="left">
              Transportation Guide
            </PrimaryButton>
          </div>
        </div>
      </div>

      <div className="homepage-content-container">
        <div className="homepage-content">
          <div>
            <h1>Accommodations</h1>
            <p>
              The accommodations on the island are designed to blur the line
              between indoor luxury and the vibrant natural world outside.
              Whether you prefer the rhythmic sound of waves beneath your
              floorboards or a sweeping panoramic view from a jungle canopy, the
              lodging opotions cater to both those seeking total seclusion and
              those who want to be at the heart of the island's social scene.
            </p>
            <h3>Coastal Escapes & Overwater Sanctuaries</h3>
            <p>
              For many, the quintessential Taniti Island experience involves
              staying as close to the water as possible. With our{" "}
              <b>Overwater bungalows</b>, a unique perspective will soon
              blossom, featuring glass floor panels to view the reef below and
              direct ladder access into the turquoise shallows. If you prefer
              the feeling of sand between your toes the moment you step outside,
              <b>beachfront villas</b> tucked slightly more inland behind the
              waves will provide you that private sanctuary. These often come
              with outdoor rain showers and private plunge pools, perfect for
              cooling after a morning in the sun.
            </p>
            <h3>Boutique Hillside Retreats</h3>
            <p>
              Higher up in the island's interior, you'll find{" "}
              <b>boutique eco-lodges</b> and resorts that prioritize
              breathtaking views and cooling winds. These properties are often
              built using sustainable local materials like bamboo and reclaimed
              hardwoods, blending seamlessly into the lush flora of Taniti's
              tropic garden. Staying ont he hillside offers a different kind of
              serenity--one characterized by the sounds of the tropical forest
              and a front-row seat to spectacular sunsets that fade below the
              horizon.
            </p>
            <h3>Hertiage Inns & Guesthouses</h3>
            <p>
              In Taniti's Island main village or harbor area,{" "}
              <b>heritage inns and guesthouses</b> offer a more communal and
              culturally immersive stay. These colorful, colonial-style
              buildings put you within walking distance of local bistros,
              artisan markets, and the docks. They are ideal for travelers who
              enjoy a lively atmosphere and want to engage with the local
              lifestyle before retreating to a nice open veranda for the
              evening.
            </p>
            <p>
              No matter where you choose to drop your bags, the emphasis remains
              on "island time". This unhurried pace supported by world-class
              hospitality and an architecture that celebrates the surrounding
              enviornment. Next, we can look at the various attractions and
              hidden gems that make exploring this destination so rewarding.
            </p>
            <PrimaryButton to="/accommodations" className="right">
              Accommodation Guide
            </PrimaryButton>
          </div>
          <img src="/home-square.jpg" alt="island bungalow" />
        </div>
      </div>
    </div>
  );
}

export default Home;

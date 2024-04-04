import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16" id="about">
        <SectionHeaders
          subHeader={'Our story'}
          mainHeader={'About us'}
        />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
          At Brulerie Café, our passion for coffee is reflected in every cup we serve. From the moment you walk through our doors, youre enveloped in the enticing aroma of freshly roasted beans and the warmth of a space designed for comfort and community.
          </p>
          <p>Founded over a decade ago by coffee enthusiasts with a shared dream, Brulerie Café has become the favorite gathering spot for those seeking an exceptional coffee experience in a cozy and relaxed atmosphere.</p>
          <p>Come join us at Brulerie Café, where every cup tells a story and every customer becomes part of our coffee family.</p>
        </div>
      </section>
      <section className="text-center my-8" id="contact">
        <SectionHeaders
          subHeader={'Don\'t hesitate'}
          mainHeader={'Contact us'}
        />
        <div className="mt-8">
          <a className="text-4xl underline text-gray-500" href="tel:+46738123123">
            +0981 905585
          </a>
        </div>
      </section>
    </>
  )
}

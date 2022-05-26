import { About } from "./About";
import { ContactUs } from "./ContactUs";
import { contact, photos, questions, /*reviews,*/ services } from "./data";
import { FAQ } from "./FAQ";
import { Footer } from "./Footer";
import { Gallery } from "./Gallery";
import { Header } from "./Header";
import { Navbar } from "./Navbar";
import { Services } from "./Services";
// import { Testimonials } from "./Testimonials";

export function App() {
  return (
    <div className="App flex flex-col justify-between min-h-screen mt-8 md:mt-6">
      <Navbar />
      <Header contact={contact} services={services} />
      <main>
        <About />
        <Services services={services} />
        <Gallery photos={photos} />
        {/* <Testimonials reviews={reviews} /> */}
        <FAQ questions={questions} />
        <ContactUs contact={contact} />
      </main>
      <Footer contact={contact} />
    </div>
  );
}

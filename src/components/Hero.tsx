function Hero() {
  return (
    <section id="hero">
      <div className="container">
        <div className="text-content">
          <h5>Digital Products</h5>
          <h1>
            Sell online courses, coaching sessions, webinars, workshops, ebooks,
            and anything you can think of on Lotia
          </h1>
          <p>
            Get everything you need in one place that you own. Podia takes care
            of hosting products, taking payments, and getting products to your
            customers. And you always control your own work.
          </p>
          <button className="btn btn-primary">Get your free account</button>
        </div>

        <div>
          <img src="/hero_image.png" alt="Lotio App." className="hero-image" />
        </div>
      </div>
    </section>
  );
}

export default Hero;

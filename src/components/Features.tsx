import { features } from "../data";

function Features() {
  return (
    <section id="features">
      <div className="container">
        <h2 className="text-center">
          All you have to do is make the product. Podia takes care of the
          details for you.
        </h2>
        <p className="text-center w-less">
          Podia lets you make your sales page, take payments, and give your
          customers access all in one place. Host and sell your products without
          needing to figure out a handful of new tools.
        </p>

        <ul role="list" className="features">
          {features.map((feature, index) => (
            <li key={index} className="feature">
              <img src={feature.icon} alt="" />
              <h4 className="title">{feature.title}</h4>
              <p className="description">{feature.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Features;

import { features } from "../data";

function Features() {
  return (
    <section id="featuers" className="container">
      <h2>
        All you have to do is make the product. Podia takes care of the details
        for you.
      </h2>
      <p>
        Podia lets you make your sales page, take payments, and give your
        customers access all in one place. Host and sell your products without
        needing to figure out a handful of new tools.
      </p>

      <ul role="list">
        {features.map((feature, index) => (
          <li key={index} className="feature">
            <img src={feature.icon} alt="" />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Features;

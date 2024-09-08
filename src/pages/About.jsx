import Nus from "../images/nus.png";

function About() {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">About Me</h2>

      <section className="mb-4">
        <div className="flex justify-center">
          <img
            src={Nus}
            width="200"
            alt="Profile Picture"
            className="rounded-full"
          />
        </div>
      </section>
      <br />
      <p className="mb-4">
        Hi, I'm Nuki. I'm a motivated data analyst who enjoys digging into data
        and turning it into useful insights. Having gone through a career in
        several roles; being field drilling engineer, academic researcher and
        EHS (Environment Health & Safety) consultant, I'm always amazed how far
        we get with the help of data.
      </p>

      <p className="mb-4">
        My past career taught me to how define a problem and come up with
        systematic problem solving. Data is always my main weapon to back up the
        crafted solutions. Now, I'm excited to expand my knowledge and skills to
        help customers make the best use of their data to achieve goals,
        particularly in creating safe, environmental-compliant and sustainable
        business.
      </p>
      <br />

      <h4 className="text-xl font-semibold mb-2">
        How did I fall in love with data?
      </h4>

      <p>
        It's said that data is the new oil. Unfortunately, we aren't living in
        an ideal world where data is always in ready-to-use package. That is
        where the fun starts. Revealing puzzle within the data is what trully
        fascinates me!
      </p>
    </div>
  );
}

export default About;

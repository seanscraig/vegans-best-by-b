import "./About.css";
import selfImg from "../../assets/aboutImg.jpg";
import familyImg from "../../assets/familyImg.jpg";

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <img src={selfImg} alt="" />
      <section>
        <h3>Meet Barookah!</h3>
        <p>
          I started cooking at the age of eight or nine years old and had my first cook day at eleven or twelve years old. Growing up I had to cook for a household of 15 or so people. I love to do but it was something that I began to grow and love.
        </p>
        <img src={familyImg} alt="" />
        <p>
          Something that I've always done for me my brothers and father was I would cook every Friday and we will sit down at the dinner table before sunset and eat as a family and I would cook seven to eight course meals every Friday and it was our catching up time with each other and that was always the best part of my week and now eating at the dinner table with my family every night my husband and children is the best part of my day this one thing that I always look forward to
          at the end of my day so I would like to share recipes that me and my family enjoy so for my family to yours thank you so much for your support. 🍽️😋🤤👩🏾‍🍳
        </p>
      </section>
      <section>
        <h3>The Company</h3>
        <p>
          Vegans best offer catering and you can also purchase recipes that also have cook a long videos to go with the recipes. Also do meal prep and you can you can also sign up for virtual cooking classes. And hopefully soon I will be able to ship some of my products but for now you can find some of my products in Bonne Sante Health Foods store located at 1512 East 53rd Street 60615 Chicago IL
        </p>
      </section>
    </div>
  );
};
export default About;

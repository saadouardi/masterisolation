import { Header } from "../../../components/Common/Header/Header";
import { Footer } from "../../../components/Common/Footer/Footer";
import { Support } from "../../../components/Support/Support";
import Support1 from "../../../assets/images/support/Agent 1.jpg";
import Support2 from "../../../assets/images/support/Agent 2.jpg";
import Support3 from "../../../assets/images/support/Agent 1.jpg";
import "./Contact.scss";

export const Contact = () => {
  const supportAgents = [
    {
      image: Support1,
      name: "Saad Ouardi",
      job: "Software Developer",
      phone: "+49 15 216 422 700",
      email: "saad.ouardi.dev@gmail.com"
    },
    {
      image: Support2,
      name: "Sahar",
      job: "Sales Support",
      phone: "+212 -- -- -- --",
      email: "sahar@gmail.com"
    },
    {
      image: Support3,
      name: "Fatima",
      job: "Chat Support",
      phone: "+212 -- -- -- --",
      email: "fatima@gmail.com"
    }
  ];
  return (
    <>
      <Header />
      <main className="contact">
        <div className="contact-form">
          <form>
            <div className="form-header">
              <h1>Contact Us</h1>
              <h3>Get in touch with us!</h3>
            </div>

            <div className="form-body">
              <div className="input-container">
                <input type="text" placeholder="First Name" id="firstName" />
                <input type="text" placeholder="Last Name" id="lastName" />
              </div>

              <input type="email" placeholder="Email Address" id="email" />
              <input type="tel" placeholder="Phone Number" id="phoneNumber" />
              <input type="text" placeholder="Subject" id="subject" />
              <textarea
                name=""
                id="message"
                cols="30"
                rows="10"
                placeholder="Message"
              ></textarea>

              <div>
                <input type="submit" value="Send" />
              </div>
            </div>
          </form>
        </div>

        <div className="support-container">
          {supportAgents.map((agent, index) => (
            <Support
              key={index}
              SupportImage={agent.image}
              SupportName={agent.name}
              SupportJob={agent.job}
              SupportPhone={agent.phone}
              SupportEmail={agent.email}
              SupportLinkedIn=""
              SupportGitHub=""
              SupportTwitter=""
              SupportInstagram=""
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

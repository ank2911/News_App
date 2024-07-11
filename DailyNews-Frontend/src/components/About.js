import React from "react";
import "../styles/About.css"; // Assuming you have a separate CSS file for styling

const About = () => {
  return (
    <div className="wrapper">
      <div className="content">
        <div className="container py-3">
          <h2 className="mt-5 mb-4">Get To Know About Us :</h2>
          <p className="lead">
            Welcome to Daily Insight News, your trusted source for breaking news, insightful analysis, and in-depth coverage of global events.<br></br> Our mission is to provide accurate and timely information across various topics including politics, business, technology, sports, and entertainment.
          </p>
          <p>
            At Daily Insight News, we are committed to delivering high-quality journalism that informs and engages our readers. <br></br>Our dedicated team of journalists and editors work tirelessly to bring you the latest updates and stories that matter most.
          </p>

          <button className="btn btn-outline-primary m-0">Learn More</button>
        </div>
        
      </div>
    </div>
  );
};

export default About;

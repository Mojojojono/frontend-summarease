import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="banner">
        <div className="main">
          <h1>Streamline Your Meetings</h1>
          <p>
            {" "}
            Our meeting summarizer takes your uploaded meeting recordings and
            transforms them into concise, actionable insights. Perfect for busy
            professionals, it automatically extracts the key points from your
            meetings, ensuring you capture critical information without sitting
            through hours of audio. With our tool, you can easily review what
            matters most, saving time and boosting productivity. Whether it’s a
            team meeting, client call, or webinar, our service provides clear,
            easy-to-understand summaries that help you make informed decisions
            faster.
          </p>
        </div>
        <div className="buttons">
          <a href="#upload">
            <button className="button1">
              <div className="svg-wrapper-1">
                <div className="svg-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill="currentColor"
                      d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                    ></path>
                  </svg>
                </div>
              </div>
              <span>Get Started</span>
            </button>
          </a>
          <a href="#features">
            <button className="button2">
              Learn More
              <span></span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;

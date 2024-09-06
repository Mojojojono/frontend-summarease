import "./About.css";
import speech_icon from "../../assets/voice-recognition.png";
import nlp_icon from "../../assets/nlp.png";
import tokenization_icon from "../../assets/tokenization.png";
import punctuation_icon from "../../assets/punctuation.png";
const About = () => {
  return (
    <>
      <div className="abt" id="about">
        <a href="#home">
          <button className="back-button">
            <svg className="svgIcon" viewBox="0 0 384 512">
              <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
            </svg>
          </button>
        </a>

        <div className="abt-head">
          <h2>How Everything Works?</h2>
          <p>
            Elevate Your Meeting Experience: With the power of Ai our
            cutting-edge meeting summarizer is designed to revolutionize your
            approach towards meetings
          </p>
        </div>
        <div className="abt-tiles">
          <div className="abt-card">
            <div className="abt-card-inner">
              <img src={speech_icon} alt="" />
              <h3>Speech Recognition</h3>
              <p>
                This Process involves converting spoken language into text. It
                uses machine learning algorithms to analyze audio inputs and
                transcribe them accurately into written text.
              </p>
            </div>
          </div>
          <div className="abt-card">
            <div className="abt-card-inner">
              <img src={punctuation_icon} alt="" />
              <h3>Speech Punctuation</h3>
              <p>
                Speech punctuation involves adding punctuation marks (like
                periods, commas, question marks) to transcribed speech, making
                the text more readable and grammatically correct.
              </p>
            </div>
          </div>
          <div className="abt-card">
            <div className="abt-card-inner">
              <img src={nlp_icon} alt="" />
              <h3>Natural Language Processing</h3>
              <p>
                Leverage the power of NLP to understand and analyze meeting
                content. Our feature extracts key information, identifies
                topics, and provides deeper insights into your discussions
              </p>
            </div>
          </div>
          <div className="abt-card">
            <div className="abt-card-inner">
              <img src={tokenization_icon} alt="" />
              <h3>Tokenization</h3>
              <p>
                Tokenization breaks down text into individual units or tokens,
                such as words, phrases, or sentences. It's a fundamental step in
                Natural Language Processing (NLP) for analyzing and processing
                textual data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

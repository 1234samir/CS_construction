import React from 'react';
import logo from '../logo.png';
import footer_logos from './footer_logos.png';
import './footer.css';
import { Icon } from 'semantic-ui-react';
export function Footer() {
  return (
    <footer className="all_footer">
      <div className="logo">
        <img src={logo} alt="Logo" />

        <span className="item">
          <p>
            Our goal is to bring light into renovation and re-design of your commercial and/or
            residential property. Our team of professionals is highly skilled and trained to deliver
            dream work in reasonable time-frame, with commitment of high level of the service. Our
            estimates are below the market value, considering the quality of our work and service
            delivered.{' '}
          </p>
        </span>
      </div>
      <div className="clear"> </div>

      <div className="contact">
        <p>Contact Us </p>{' '}
        <p>
          Phone <Icon name="phone" size="small" />: (410) 336 8243
        </p>
        <p>
          {' '}
          Email <Icon name="mail" size="small" />: info@mycsconstruction.com
        </p>
      </div>
      <div className="footer_logos">
        <img src={footer_logos} alt="footer_logos.png" />
      </div>

      <div className="clear"> </div>

      <hr className="last_line" />

      <footer className="container">
        <p className="float-right">
          <a href="#">Back to top</a>
        </p>
        <p>
          &copy; 2017-2019 Company, Inc. &middot;
          <a href="#">Privacy</a>
          &middot;
          <a href="#">Terms</a>
        </p>
      </footer>
    </footer>
  );
}

import { FaPhone, FaEnvelope } from 'react-icons/fa';

const ContactCard = ({ title, email, phone }) => (
  <div className="contact-card">
    <h2 className="contact-card__title">{title}</h2>

    <p className="contact-card__info">
      <FaEnvelope className="contact-card__info--icon" />
      {email}
    </p>
    
    <p className="contact-card__info">
      <FaPhone className="contact-card__info--icon" />
      {phone}
    </p>
  </div>
);

export default ContactCard;

import React from 'react';
// import Icon from './Icons';

interface WhatsAppLinkProps {
  message: string;
  className?: string;
  children: React.ReactNode;
}

const WhatsAppLink: React.FC<WhatsAppLinkProps> = ({ message, className = '', children }) => {
  const phoneNumber = '923400596665';
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
};

export default WhatsAppLink; 
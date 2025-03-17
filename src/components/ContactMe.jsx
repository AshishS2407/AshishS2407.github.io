import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const contactLinks = [
  {
    href: "mailto:ashishanandhu78@gmail.com",
    icon: faEnvelope,
    label: "Email",
  },
  {
    href: "https://github.com/AshishS2407",
    icon: faGithub,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/ashish-s-769a871b6/",
    icon: faLinkedin,
    label: "LinkedIn",
  },
];

const ContactMe = () => {
  return (
    <section id="contact" className="bg-gray-900 py-6 text-center">
      {/* Title */}

      {/* Social Icons */}
      <div className="flex justify-center space-x-8">
        {contactLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="text-white text-4xl transform transition-transform duration-300 hover:scale-110 hover:text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
          >
            <FontAwesomeIcon icon={link.icon} />
          </a>
        ))}
      </div>
    </section>
  );
};

export default ContactMe;

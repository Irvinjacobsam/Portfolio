import React from "react";
import "./style.css";
import {
  FaGithub,
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
  FaYoutube,
  FaTwitch,
  FaInstagram,
  FaUserCircle,
} from "react-icons/fa";
import { socialprofils } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofils.twitter && (
          <li>
            <a href="https://twitter.com/IrvinJacobsam">
              <FaTwitter />
            </a>
          </li>
        )}
        {socialprofils.github && (
          <li>
            <a href="https://github.com/Irvinjacobsam">
              <FaGithub />
            </a>
          </li>
        )}
         {socialprofils.instagram && (
          <li>
            <a href="https://www.instagram.com/irvin_jacsa_7/">
              <FaInstagram />
            </a>
          </li>
        )}
        {socialprofils.facebook && (
          <li>
            <a href="https://www.facebook.com/irvin.jacobsam/">
              <FaFacebookF />
            </a>
          </li>
        )}
        {socialprofils.linkedin && (
          <li>
            <a href="https://www.linkedin.com/in/irvin-jacob-sam-147773284/">
              <FaLinkedin />
            </a>
          </li>
        )}
         {/* {socialprofils.usercircle && (
          <li>
            <a href="https://www.linkedin.com/in/irvin-jacob-sam-147773284/">
              <FaUserCircle />
            </a>
          </li>
        )} */}
        {socialprofils.twitch && (
          <li>
            <a href={socialprofils.twitch}>
              <FaTwitch />
            </a>
          </li>
        )}
      </ul>
      <p>Follow Me</p>
    </div>
  );
};

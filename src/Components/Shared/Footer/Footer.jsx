import { Link } from "react-router-dom";
import Container from "../Container/Container";

const Footer = () => {
  return (
    <footer className="bg-neutral mt-10 shadow-xl">
      <Container>
        <div className="footer text-neutral-content grid-rows-2 p-10 place-items-center">
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
          <nav>
            <h6 className="footer-title">Social</h6>
            <a className="link link-hover">Twitter</a>
            <a className="link link-hover">Instagram</a>
            <a className="link link-hover">Facebook</a>
            <a className="link link-hover">GitHub</a>
          </nav>
          <nav>
            <h6 className="footer-title">Explore</h6>
            <a className="link link-hover">Features</a>
            <a className="link link-hover">Enterprise</a>
            <a className="link link-hover">Security</a>
            <a className="link link-hover">Pricing</a>
          </nav>
          <nav>
            <h6 className="footer-title">Apps</h6>
            <a className="link link-hover">Mac</a>
            <a className="link link-hover">Windows</a>
            <a className="link link-hover">iPhone</a>
            <a className="link link-hover">Android</a>
          </nav>
        </div>
        <hr />
        <p>&copy; All Right Reserved by - Dream School</p>
        <p>Developed By - <Link to={"http://najatulislam.me/"}>Najatul islam</Link></p>
      </Container>
    </footer>
  );
};

export default Footer;

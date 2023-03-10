import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { AiOutlinePhone } from "react-icons/ai";

export default function Contact({ email, phone, linkedin, instagram }) {
  return (
		<>
			<section>
				<h4>Contact Me</h4>
				<article>
					<span>Email:</span>
					<a href={`mailto:${email.name}`}>{email.name}</a>
					<Icon type={email.icon}/> CREAR COMPONENTE CON EL SWITCH PARA VER CUAL ICON ESs
				</article>

			</section>
			<section>
				<h2>Follow Me</h2>
        <li>
          <a href="https://www.linkedin.com/in/camila-marin-aguirre/">
            <FaLinkedin size={25} />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/marin_cami_/?igshid=MDM4ZDc5MmU%3D">
            <BsInstagram size={25} />
          </a>
        </li>
			</section>
		</>
  );
}

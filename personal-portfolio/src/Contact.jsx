import { BsInstagram } from 'react-icons/bs'
import { FaLinkedin } from 'react-icons/fa'
import { MdOutlineMailOutline } from 'react-icons/md'
import { AiOutlinePhone } from 'react-icons/ai'

export default function Contact() {

	return (
		<div>
			<div>
				<h2>Contact Me</h2>	
				<li>
					<a href="marin_cami@hotmail.com"><MdOutlineMailOutline size={25} /></a>
				</li>
				<li>
					<a href="+57 3176796792"><AiOutlinePhone size={25} /></a>
				</li>
			</div>
			<div>
				<h2>Follow Me</h2>
				<li>
					<a href="https://www.linkedin.com/in/camila-marin-aguirre/"><FaLinkedin size={25} /></a>
				</li>
				<li>
					<a href="https://www.instagram.com/marin_cami_/?igshid=MDM4ZDc5MmU%3D"><BsInstagram size={25} /></a>
				</li>
			</div>
		</div>
	)
}

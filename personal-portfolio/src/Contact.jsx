import Icon from './Icon'
import { useState } from 'react'

export default function Contact({ email, phone, linkedin, instagram }) {
	const [value, setValue] = useState('')
	const [status, setStatus] = useState('Typing') // typing, submitting or success 
	const handleSubmit = (event) => {} // TO DO
	const handleInputChange = (e) => {
		setValue(e.target.value)
	} // the same is typed in all fields ......
	
	return (
	<>
		<form onSubmit={handleSubmit}>
			<label>Get in touch</label>
			<input type="text" placeholder="Name" value={value} onChange={handleInputChange}/>
			<input type="text" placeholder="Lastname" onChange={handleInputChange}/> 
			<input type="text" placeholder="Email address" onChange={handleInputChange}/>
			<textarea type="text" placeholder="Message" onChange={handleInputChange}/>
			<button type="submit" value="Submit">SEND</button>
		</form>
		<section>
			<h4>Contact Me</h4>
			<article>
				<a href={`mailto:${email.name}`}>
					<Icon type={email.icon}/>
				</a>
			</article>
			<article>
				<a href={phone.name}>
					<Icon type={phone.icon}/>
				</a>
			</article>
		</section>
		<section>
			<h4>Follow Me</h4>
			<article>
				<a href={linkedin.name}>
					<Icon type={linkedin.icon}/>
				</a>
			</article>
			<article>
				<a href={instagram.name}>
					<Icon type={instagram.icon}/>
				</a>
			</article>
		</section>
	</>
  );
}

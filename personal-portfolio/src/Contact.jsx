import Icon from './Icon'

export default function Contact({ email, phone, linkedin, instagram }) {
  return (
	<>
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

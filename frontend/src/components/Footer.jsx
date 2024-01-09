import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const socialLinks = [
	{ id: 1, icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/juan-ignacio-pucheta/' },
	{ id: 2, icon: <FaGithub />, href: 'https://github.com/JuaniPucheta' },
	{ id: 3, icon: <FaInstagram />, href: 'https://www.instagram.com/jignaciopucheta/' },
];

export const Footer = () => {
	return (
		<footer className="bg-[#678c99] rounded-lg shadow m-4">
			<div className="mx-auto text-white max-w-screen-xl p-4 sm:flex sm:items-center sm:justify-between">
				<span className="text-base text-center sm:text-left justify-center flex">© 2024 - Juan Ignacio Pucheta</span>
				<ul className="flex flex-wrap items-center text-xl font-medium sm:mt-0 justify-center sm:justify-start">
					{socialLinks.map((link) => (
						<li key={link.id} className="me-4 md:me-6 transform transition-transform hover:scale-125 mt-1">
							<a href={link.href} className="hover:underline" target="_blank" rel="noopener noreferrer">
								{link.icon}
							</a>
						</li>
					))}
				</ul>
			</div>
		</footer>
	);
};
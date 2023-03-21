import { AiOutlinePhone } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'
import { FaLinkedin } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import React from 'react'

export default function Icon({ type }) {

    function getIcon(type) {
		let icon;
		switch(type) {
			case 'email':
				icon = FiMail 
				break
            case 'phone':
				icon = AiOutlinePhone 
				break
            case 'linkedin':
				icon = FaLinkedin 
				break
			default:
				icon = BsInstagram
		}
		return icon

	}

    return (
        <>
        { React.createElement(getIcon(type))}
        </>
    )
}

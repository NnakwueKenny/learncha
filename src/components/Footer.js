import React from 'react'

const Footer = ({id}) => {
  return (
    <footer id={`${id}`}>
        <div className="">
            <div className="footer-frame">
                <div className="text-white">
                    <div className="flex flex-col lg:flex-row gap-4 md:gap-10 justify-center items-center py-4">
                        <div className="">
                            <div className="flex flex-col -gap-2">
                                <h3>Contact Us</h3>
                                <address className="map">60 Ahmadu Bello Way, Kano, Nigeria</address>
                                <address className="mail"><a className='text-white' href="mailto:contact@kidschool.com">learncha@stemlab.com.ng</a></address>
                                <address className="phone">+234-813-792-6904</address>
                            </div>
                            <ul className="social">
                                <li><a className="facebook" href="#">Facebook</a></li>
                                <li><a className="google" href="#">Google+</a></li>
                                <li><a className="twitter" href="#">Twitter</a></li>
                                <li><a className="pinterest" href="#">Pinterest</a></li>
                            </ul>
                        </div>
                        <div className="flex rounded-lg overflow-hidden bg-red-500">
                            <iframe className='w-96 h-96' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.6476399563853!2d8.558341914296118!3d11.998865638721442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae816ff2a1a097%3A0x49932328c5acdfbf!2s60%20Ahmadu%20Bello%2C%20GRA%20700213%2C%20Kano!5e0!3m2!1sen!2sng!4v1667044816616!5m2!1sen!2sng" style={{border: '0'}} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="holder text-white">
                        <p>Copyright 2022 Learncha. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
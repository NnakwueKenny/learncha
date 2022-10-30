import React from 'react'

const Footer = ({id}) => {
  return (
    <footer className="w-full bg-[#85d8e5]">
        <div className="">
            <div className="footer-frame">
                <div className="text-white">
                    <div className="flex flex-col lg:flex-row gap-4 md:gap-10 justify-between items-center p-4">
                        <div className="">
                            <div className="flex text-lg flex-col -gap-2">
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
                    </div>
                </div>
                <div className="flex justify-center w-full">
                    <div className="text-white font-bold">
                        <p>Copyright 2022 Learncha. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
import React from 'react'

const Footer = ({id}) => {
  return (
    <footer id={`${id}`}>
        <div className="footer-holder">
            <div className="footer-frame">
                <div className="footer-content">
                    <div className="col-holder">
                        <div className="col_wrap">
                            <div className="col">
                                <h3>Our address</h3>
                                <address className="map">60 Ahmadu Bello Way, Kano, Nigeria</address>
                                <address className="mail"><a href="mailto:contact@kidschool.com">learncha@stemlab.com.ng</a></address>
                                <address className="phone">+234-813-792-6904</address>
                            </div>
                        </div>
                        <div className="col_wrap">
                            <div className="col">
                                <h3>Latest posts</h3>
                                <ul className="posts">
                                    <li><a href="#">Dignissimos ducimus blanditiis</a></li>
                                    <li><a href="#">Praesentium voluptatum deleniti</a></li>
                                    <li><a href="#">Atque corrupti quos dolores</a></li>
                                    <li><a href="#">Molestias excepturi sint occaecati</a></li>
                                    <li><a href="#">Cupiditate provident similique</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col_wrap">
                            <div className="col">
                                <h3>Follow us</h3>
                                <p className="social">Accusamus iusto odio dignissimos ducimus qui blanditiis praesentium</p>
                                <ul className="social">
                                    <li><a className="facebook" href="#">Facebook</a></li>
                                    <li><a className="google" href="#">Google+</a></li>
                                    <li><a className="twitter" href="#">Twitter</a></li>
                                    <li><a className="pinterest" href="#">Pinterest</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col_wrap">
                            <div className="col">
                                <h3>Newsletter</h3>
                                <p className="form-newsletter">Voluptas sit aspernatur consequuntur.</p>
                                <form action="#" className="form-newsletter">
                                    <fieldset>
                                        <input type="email" placeholder="Your email..." />
                                        <input className="btn white" type="submit" value="Subscribe" />
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="holder">
                        <p>Copyright 2022 Learncha. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
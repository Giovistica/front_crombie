import './Styles/Footer.css';

function Footer(){
    return (
        
    <div id = "df">
        <footer id = "footer">
        <div id="derecha">
            <img src="public/Logo.png"/>
            
            <p><b>LaslesVPN</b> is a private virtual network that <br/>
                has unique features and has high security.</p>
            <div id = "chiquito">
                <div className="redes-sociales">
                    <a href="https://www.facebook.com" target="_blank" >
                        <img src="public/Facebook.png"/>
                    </a>
                    <a href="https://twitter.com" target="_blank" >
                        <img src="public/Twitter.png"/>
                    </a>
                    <a href="https://www.instagram.com" target="_blank" >
                        <img src="public/Instagram.png"/>
                    </a>
                </div>
                <p className = "grayText2">©2020Lasles<b>VPN</b></p>
            </div>
        </div>   
        <div id = "izquierda">
            <div id = "uls">
                
                    <ul> <h3>Product</h3>
                        <li><a>Download</a></li>
                        <li><a>Princing</a></li>
                        <li><a>Locations</a></li>
                        <li><a>Servers</a></li>
                        <li><a>Countries</a></li>
                        <li><a>Blog</a></li>     
                    </ul>
                
                    <ul> <h3>Engage</h3>
                        <li><a>Lasles VPN?</a></li>
                        <li><a>FAQ</a></li>
                        <li><a>Tutorials</a></li>
                        <li><a>About us</a></li>
                        <li><a>Privacy policy</a></li>
                        <li><a>Terms of service</a></li>
                    </ul>

                    <ul> <h3>Earn Money</h3>
                        <li><a>Afilliate</a></li>
                        <li><a>Become a partner</a></li>
                    </ul>          

            </div>    
        </div>
    </footer>
</div>

    )
}
export default Footer
import React, {Component} from 'react';
import "./about.css";
class About extends Component{
    
    
render(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <img src={require ("./sakthi.jpg") } alt="about_img"/>
                </div>
                <div className="col-md-8">
                    <h3>Sakthivel</h3>
                    <p>

After leaving my job in honda service center, I was desperate and in need for help and healing.
I was confused and scared, but I needed answers. Although I was not too familiar with Astrology, I decided to visit an Astrologer, which proved to be a great decision. The Astrologer I visited was accurate in depicting the individual I was. He also helped me realize the fears and confusion I was going through at the time.  This completely changed my view on Astrology and those who practice Astrology.

Eventually, I found an Astrologer who mentored me and gave me private lessons once a week . During that time, he not only helped me develop and practice Astrology, but also helped me cope with the rough transition in my life.  Astrology had awoken something in me and I started studying it at every opportunity.  I started going to numerous workshops, seminars, and events - just to learn more. 
My gift as an Astrologist is complemented by the unique way I read charts, cards or numbers associated with an individual. This unique perspective results in a very personalized and accurate reading for my clients. It also gives me great joy to heal someone lost, confused, or in need of help; as I once was. 
                    </p>
                </div>


            </div>
        </div>
    )
}
}

export default About;
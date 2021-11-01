import React from 'react';
import './ExtraSection.css'

const SectionTwo = () => {
    return (
        <div className="third-section">
              <h1>Impressions</h1>
              <h2>Thank you for the reviews we are proud of</h2>
              <hr />

               <div className="sectionArea">
                   <div className="sectionCard">
                       <img src="https://i.ibb.co/BnRDxdh/images.jpg" alt="" />
                       <h2>Sandra Bautista</h2>
                       <p>Can't wait to hit the slopes? Get ready to make the most out of winter and enjoy a fantastic ski or snowboard getaway. Don't forget to keep an eye on the official websites of your chosen resort to get the most accurate information about current rules and regulations.</p>
                       

                   </div>
                   <div className="sectionCard">
                       <img src="https://i.ibb.co/bJqjjrf/unnamed.jpg" alt="" />
                       <h2>Alex Brown</h2>
                       <p>
                       Once your flight is booked, you’ll want to keep tabs on gate changes, layover information and more. FlightStats.com can help you plan a smooth trip by advising you on the best time of day to fly from a specific airport and which terminals to avoid when connecting flights.
                       </p>
                       

                   </div>
                   <div className="sectionCard">
                       <img src="https://i.ibb.co/Vx1DBrt/images-1.jpg" alt="" />
                       <h2>Patricia  Spruill</h2>
                       <p>
                       Vacation rentals are an especially good value for groups because they generally offer more space and amenities for prices similar to or less than hotel rates, particularly if you look at it on a per-bed basis.
                       </p>
                       

                   </div>
                  
               </div>

           </div>
    );
};

export default SectionTwo;
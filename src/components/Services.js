import React, { Component } from 'react'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } 
from "react-icons/fa";
import Title from './Title'

export default class Services extends Component {
    state={
        services: [
        {
            icon:<FaCocktail/>,
            title:"free cocktails",
            info:'Discover Good Foods best ever mocktail recipes for every occasion, including non-alcoholic punch, mulled drinks, juices, spritzers, cordials and coolers'
        },
        {
            icon:<FaHiking/>,
            title:"Endless Hiking",
            info:'The Endless Wall Trail is a lesser-known trail in the New River Gorge, making it a perfect place for hikers to get away from the crowds and experience the New River Gorges natural beauty in a more remote setting'
        },
        {
            icon:<FaShuttleVan/>,
            title:"Free shuttle",
            info:'Park Plus Airport Parking offers 24hr Airport Shuttle service. Our shuttle service is free to all our customer, to and from our parking lot & the airport terminals. '
        },
        {
            icon:<FaBeer/>,
            title:"Strongest Beer",
            info:'Beer lovers beware: Here is a challenge you might not want to take on. A beer called Snake Venom (dreamed up, perhaps in a nightmare) by the U.K. brewing company Brewmeister, is now apparently the world’s strongest beer, with an ABV of 67.5 percent.'
        },
        ]
    }
    render() {
        return (
            <section className="services">
              <Title title="services" />
              <div className="services-center">
              {this.state.services.map((item,index) => {
                  return ( <article key={index} className="service">
                   <span>{item.icon}</span>
                   <h6>{item.title}</h6>
                   <p>{item.info}</p>
                  </article>
                );  
              })}
              </div>
              
            </section>
        );
    }
}

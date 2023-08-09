import React from "react";
import NavBar from "./NavBar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

const Home = () => {
    return (
              <>
              <NavBar />
                <div className="container justify-content-center">
                <Jumbotron />
              <div className="Card-grup d-flex justify-content-between mt-3">
              <Card />
              <Card />
              <Card />
              <Card />
              </div>
                </div>
              <Footer />
              </>
        
        
    );
};

export default Home;

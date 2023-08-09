import React from "react";

const Card = () => {
    return (
        <div className="card m-2 " style={{ width: "20rem" }}>
            <img src="https://png.pngtree.com/background/20210711/original/pngtree-sunset-landscape-at-beach-with-boat-picture-image_1169056.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title text-center">Card title</h5>
                <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div className="card-body text-center">
                <a href="#" className="btn btn-primary">Find Out More!</a>
                </div> 
               
            </div>
        </div>
    );
};


export default Card;

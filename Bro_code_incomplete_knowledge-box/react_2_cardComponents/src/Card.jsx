import profilePic from "./assets/profile_picture.png"

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture" />
            <h2 className="card-title">Card Title</h2>
            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, maxime!</p>
        </div>
    );
}

export default Card;
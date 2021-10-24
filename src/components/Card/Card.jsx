import "./Card.css";

export const Card = ({ name, phone, email, website }) => {
  return (
    <div className="card-container">
      <img
        className="avatar"
        src="https://avatars.dicebear.com/v2/avataaars/%7B%7Busername%7D%7D.svg?options[mood][]=happy"
        alt="avatar"
      />
      <div className="details-container">
        <p className="name">{name}</p>
        <p className="email">
          {" "}
          <i class="far fa-envelope"></i>
          {email}
        </p>
        <p className="phone">
          <i class="fas fa-phone"></i>
          {phone}
        </p>

        <p className="website">
          <i class="fas fa-globe"></i>
          http://{website}
        </p>
      </div>
      <div className="action-container">
        <button className="like">
          <i class="far fa-heart"></i>
        </button>
        <button className="edit">
          <i class="far fa-edit"></i>
        </button>
        <button className="delete">
          <i class="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

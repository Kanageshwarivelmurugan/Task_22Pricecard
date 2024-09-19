import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

import PropTypes from "prop-types";

Card.propTypes = {
  card: {
    plan: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    features: {
     
      
     
    },
  },
};

function Card({ card }) {
  return (
    <div className="col">
      <div className={`card mb-4 rounded-3  ${card.plan == 'Enterprise' && 'border-primary'}`}>
        <div className={`card-header py-3 ${card.plan == 'Enterprise' && 'text-bg-primary border-primary'}`}>
          <h6 className="my-0 fw-normal">{card.plan}</h6>
        <h1 className="card-title  pricing-card-title">
            ${card.price}
            <small className="text-body-secondary  fw-normal"><h2>/month</h2></small>
          </h1>
         
        </div>
        <div className="card-body">
        
          <ul className="list-unstyled mt-3 mb-4">
            {card.features.map((feature, index) => {
              return (
                <li key={index}>
                  {feature.enable ? (
                    <span>
                      <FontAwesomeIcon icon={faCheck} /> {feature.name}
                    </span>
                  ) : (
                    <span > 
                      <FontAwesomeIcon icon={faXmark} />
                      {feature.name}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
          <button
            type="button"
            className={`w-100 btn btn-lg 
             ${card.plan == "FREE" && "btn-primary"}
             ${card.plan == "PLUS" && "btn-primary"}
             ${card.plan == "PRO" && "btn-primary"}`}
          >
            Button
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
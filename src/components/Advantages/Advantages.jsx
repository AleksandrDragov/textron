import React from 'react';
import './Advantages.less';
import Icon from 'components/Icon/Icon';
function Advantages() {
  return (
    <div className="advantages-container">
      <h1 className="advantages-title">Why chose us?</h1>
      <div className="advantage-element-wrapper">
        <div className="advantages-text-wrapper">
          <Icon
            id="clock"
            width={100}
            height={100}
            className="advantages-icon"
          />
          <p className="advantages-main-text">
            Reconstruction of an apartment in a panel house in 30 days
          </p>
          <p className="advantages-secondary-text">
            We will complete the apartment in a panel house with an area of up
            to 80 m2 and prepare it for occupancy in 30 working days
          </p>
        </div>
        <div className="advantages-text-wrapper">
          <Icon
            id="document"
            width={100}
            height={100}
            className="advantages-icon"
          />{' '}
          <p className="advantages-main-text">
            Contract with a guarantee of up to 24 months and liability insurance
          </p>
          <p className="advantages-secondary-text">
            Before the reconstruction, we will conclude a contract in which the
            conditions, prices and deadlines are clearly set. Then we start
          </p>
        </div>
        <div className="advantages-text-wrapper">
          <Icon
            id="constructing"
            width={100}
            height={100}
            className="advantages-icon"
          />
          <p className="advantages-main-text">
            Work carried out under constant control
          </p>
          <p className="advantages-secondary-text">
            The quality of the work is ensured by an authorized construction
            supervisor, who also takes a photo and documents everything. You can
            watch everything from a distance
          </p>
        </div>
      </div>
    </div>
  );
}

export default Advantages;

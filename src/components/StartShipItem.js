import './StarShipItem.css';
import React from 'react';
import { Progress } from 'semantic-ui-react'

const StarShipItem = ({starship}) => {

    const renderNumber = (crew) => {
        if (crew <= 0){
            return "None"
        }
        return crew;
    }

    const renderHyperdriveProgress = (rating) => {
        if (rating === "unknown")
            return <Progress percent={0}/>;

        const percentage = (parseFloat(rating)/6.0 * 100)
        return <Progress percent={percentage} success/>;
    }

    return (
        <div className="ui card">
            <div className="content">
                <h4 className="ui sub header">Name : {starship.name}</h4>
                <h4 className="ui sub header">Crew : {renderNumber(starship.crew)}</h4>
                <h4 className="ui sub header">Passenger : {renderNumber(starship.passengers)}</h4>
                <div className="ui sub header">
                    <h4 className="text">HyperDrive Class :</h4>
                    {renderHyperdriveProgress(starship.hyperdrive_rating)}
                </div>
            </div>
        </div>
    )
}
export default StarShipItem;
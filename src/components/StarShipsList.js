import './StarShipsList.css';
import React, { useEffect } from 'react';
import StartShipItem from './StartShipItem';
import { connect } from 'react-redux';
import { fetchStarships } from '../actions';
import { Button } from 'semantic-ui-react';

const StarShipsList = ({response, fetchStarships}) => {
    useEffect(() => {
        fetchStarships("1");
    }, [fetchStarships]);

    const renderStarshipItem = (starships) => {
        return starships.map(starship => {
            return (
                <StartShipItem starship={starship} key={starship.name}/>
            );
        })
    }

    const renderPreviousBtn = (prelink) => {
        if (!prelink)
            return <Button content='Previos' icon='left arrow' labelPosition='left' disabled/>;

        return <Button content='Previos' icon='left arrow' labelPosition='left' onClick={() => handlePageLink(prelink)}/>;
        
        
    }

    const renderNextBtn = (nextlink) => {
        if (!nextlink)
            return <Button content='Next' icon='right arrow' labelPosition='right' disabled/>;
        
        return <Button content='Next' icon='right arrow' labelPosition='right' onClick={() => handlePageLink(nextlink)}/>;
    }

    const handlePageLink = (link) => {
        if (link)
            fetchStarships(link.substr(-1));
    }

    if(Object.keys(response).length === 0){
        return <div>No Data</div>;
    }

    return (
        <div className="starships-list ui grid">
            <div className="paginationbtns">
                {renderPreviousBtn(response.previous)}
                {renderNextBtn(response.next)}
            </div>
            {renderStarshipItem(response.results)}
            <div className="paginationbtns">
                {renderPreviousBtn(response.previous)}
                {renderNextBtn(response.next)}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { response:state }
}

export default connect(mapStateToProps, {fetchStarships})(StarShipsList);
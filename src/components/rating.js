import React from 'react';
import StarRatingComponent from 'react-star-rating-component';


export default class Rating extends React.Component {
    constructor() {
        super();

        this.state = {
            rating: 1
        };
    }

    onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
    }

    render() {
        const { rating } = this.state;
        return (
            <div className="temp">
                <h4>How would you rate your experience?</h4>
                <p>Rate us: {rating}</p>
                <StarRatingComponent
                    name="rate1"
                    starCount={5}
                    value={rating}
                    onStarClick={this.onStarClick.bind(this)}
                    
                />
            </div>
        );
    }
}

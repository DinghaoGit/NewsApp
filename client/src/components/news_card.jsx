
import React from 'react';

class NewsCard extends React.Component {

    redirectToUrl(url) {
        window.open(url, '_blank');
    }

    render() {
        return (
            <div className="card">
                <div className="card-image">
                    <img src="http://materializecss.com/images/sample-1.jpg" />
                        <span className="card-title">{this.props.news.title}</span>
                        <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
                </div>
                <div className="card-content">
                    <p>{this.props.news.description}</p>
                </div>
            </div>
        );
    }

}

export default NewsCard;
import React from 'react';
import _ from 'lodash';

import NewsCard from './news_card';

class NewsPanel extends React.Component {

    constructor() {
        super();
        this.state = {news_list: null};
        this.handleScroll = this.handleScroll.bind(this);
        this.loadMoreNews();
    }

    componentDidMount() {
        this.loadMoreNews();
        this.loadMoreNews = _.debounce(this.loadMoreNews, 1000);
        window.addEventListener("scroll", this.handleScroll);
    }

    loadMoreNews() {
        function randomString() {
            const charSet = '                  abcdefghijklmnopqrstuvwxyz0123456789';
            let len = Math.floor(Math.random() * (300 - 20 + 1)) + 20;
            let randomString = '';
            for (let i = 0; i < len; i++) {
                let randomPoz = Math.floor(Math.random() * charSet.length);
                randomString += charSet.substring(randomPoz,randomPoz+1);
            }
            return randomString;
        }

        this.state.news_list = []
        for (let i = 0; i < 15; i++) {
            this.state.news_list.push({title:"Card Title", description: randomString()});
        }
        /*
        let request = new Request('http://localhost:3000/news', {
            method: 'GET',
            cache: false
        });

        fetch(request)
            .then(res => res.json())
            .then((news) => {
                this.setState({
                    news: this.state.news ? this.state.news.concat(news) : news
                })
            });
        */
    }

    handleScroll() {
        let scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
        if ((window.innerHeight + scrollY) >= (document.body.offsetHeight - 50)) {
            this.loadMoreNews();
        }
    }

    /*
    renderNews() {
        let newsCardList = this.state.news_list.map((news) => {
            return (
                <div className="col s12 m4 l3">
                    <NewsCard news={news} />
                </div>
            );
        });

        return (
            <div className="row">
                {newsCardList}
            </div>
        );
    }
    */



    renderNews() {
        let newsCardList = this.state.news_list.map((news) => {
            return (
                <NewsCard news={news} />
            );
        });

        return (
            <div className="row">
                <div className="col s12 cards-masonry">
                    {newsCardList}
                </div>
            </div>
        );
    }


    render() {
        if (this.state.news_list) {
            return (
                <div>
                    {this.renderNews()}
                </div>
            );
        } else {
            return (
                <div>
                    Loading...
                </div>
            );
        }
    }

}

export default NewsPanel;
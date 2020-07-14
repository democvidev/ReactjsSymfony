import React, { Component } from 'react';
import axios from 'axios';


class Articles extends Component {
    constructor() {
        super();

        this.state = { articles: [], loading: true }
    }


    componentDidMount() {
        this.getUsers();
    }

    getUsers() {
        axios.get(`https://localhost:8000/api/articles`).then(articles => {
            this.setState({ articles: articles.data, loading: false })
        })
    }

    render() {
        const loading = this.state.loading;
        return (
            <div>
                <section className="row-section">
                    <div className="container">
                        <div className="row">
                            <h2 className="text-center"><span>Liste des articles</span>Créés avec l'<i
                                className="fa fa-heart"></i> par cvidev </h2>
                        </div>

                        {loading ? (
                            <div className={'row text-center'}>
                                <span className="fa fa-spin fa-spinner fa-4x"></span>
                            </div>

                        ) : (
                                <div className={'row'}>
                                    {this.state.articles.map(article =>
                                        <div className="col-md-10 offset-md-1 row-block" key={article.id}>
                                            <ul id="sortable">
                                                <li>
                                                    <div className="media">
                                                        <div className="media-body">
                                                            <h4>{article.title}</h4>
                                                            <p>{article.uri}</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            )}
                    </div>
                </section>
            </div>
        )
    }
}

export default Articles;
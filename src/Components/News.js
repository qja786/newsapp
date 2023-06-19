import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      articles: [],
      DataisLoaded: false
    }
  }
  componentDidMount() {
    fetch(  
"https://newsapi.org/v2/top-headlines?country=in&apiKey=cb475762b09d446bb335985c3453faca")
        .then((res) => res.json())
        .then((json) => {
            this.setState({
              articles: json.articles,
              DataisLoaded: true
            });
        })
}
  render() {
    
    const { articles } = this.state;
    console.log(articles);
    return (
      <div className='container my-3'>
        <h2>DailyNews - Top Headlines</h2>
        <div className="row">
          { articles.map((article) => {
            console.log(article);
              return <div className="col-md-4" key={article.url}>
              <NewsItem imageUrl={article.urlToImage} title={article.title} description={article.description} newsUrl={article.url}/>
            </div>
          })}
        </div>
       
      </div>
    )
  }
}

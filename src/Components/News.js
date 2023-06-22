import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      articles: [],
      DataisLoaded: false,
      page:1
    }
  }
  componentDidMount() {
    fetch( 
`https://newsapi.org/v2/top-headlines?country=in&pageSize=4&apiKey=cb475762b09d446bb335985c3453faca&page=${this.page}`)
        .then((res) => res.json())
        .then((json) => {
            this.setState({
              articles: json.articles
            });
            
        })
}

handlePrevClick = async () => {
  
   fetch(
`https://newsapi.org/v2/top-headlines?country=in&pageSize=4&apiKey=cb475762b09d446bb335985c3453faca&page=${this.state.page -1}`)
        .then((res) => res.json())
        .then((json) => {
            this.setState({
              articles: json.articles,
              page:this.state.page - 1
            });
        })
}
handleNextClick = async () => {
   fetch( 
`https://newsapi.org/v2/top-headlines?country=in&pageSize=4&apiKey=cb475762b09d446bb335985c3453faca&page=${this.state.page +1}`)
        .then((res) => res.json())
        .then((json) => {
            this.setState({
              articles: json.articles,
              page:this.state.page + 1
            });
        })
}

  render() {
    
    const {articles} = this.state;
    return (
      <div className='container my-3'>
        <h2>DailyNews - Top Headlines</h2>
        <div className="row" >
          { articles.map((article) => {
              return <div className="col-md-4" key={article.url}>
              <NewsItem imageUrl={article.urlToImage} title={article.title} description={article.description} newsUrl={article.url}/>
            </div>
          })}
        </div>
        <div className='d-flex justify-content-between'>
          <button disabled={this.state.page <=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
          <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
        
      </div>
    )
  }
}

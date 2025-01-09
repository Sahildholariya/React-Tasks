import React, {useEffect,useState} from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



 const News = (props)=> {
  const [article, setArticle] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResult] = useState(0)

  const capitalizeFirstLatter = (string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

   const UpdateNews = async ()=>{
    props.setProgress(10);
    const url= `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;    setLoading(true )
    let data = await fetch(url);
    let parsData = await data.json();

    setArticle(parsData.articles)
    setTotalResult(parsData.totalResults)
    setLoading(false)
    props.setProgress(100);
  }

  useEffect(() => {
  document.title = `${capitalizeFirstLatter(props.category)} - NewsMonkey`;
    UpdateNews();
    // eslint-disable-next-line
  }, [])
  
//  const  handlePreClick= async () =>{
//     setPage(page - 1)
//     UpdateNews();
    
//   }

  // const  handleNextClick= async () =>{
  //   setPage(page + 1)
  //   UpdateNews();
  // }

 const  fetchMoreData = async () => {
   const url= `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
      setPage(page + 1)
      let data = await fetch(url);
      let parsData = await data.json();
      setArticle(article.concat(parsData.articles))
      setTotalResult(parsData.totalResults)
  };
  
    return  (
      <>
        <h2 className='text-center' style={{marginTop:"86px"}}>NewsMonkey - Top {capitalizeFirstLatter(props.category)} Headline</h2>
        {loading && <Spinner/>}

        <InfiniteScroll
          dataLength={article.length}
          next={fetchMoreData}
          hasMore={article.length !== totalResults}
          loader={ <Spinner/>}
        >
        <div className="container">

        <div className="row my-4">
        {article.map((element)=>{
          return  <div className="col-md-4" key={element.url}>
              <Newsitem  title={element.title?element.title.slice(0,45):""} source={element.source.name} description={element.description?element.description.slice(0,45):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
              </div>
        })}
        </div>
        </div>
        </InfiniteScroll>
        </>
    )
}


News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general'
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

export default News


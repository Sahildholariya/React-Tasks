import React from 'react'


const Newsitem = (props)=> {
    let {title, description ,imageUrl, newsUrl,author, date, source} = props;
    return (
     <>
          <div className="card my-3">
            <div style={{display: 'flex', justifyContent:'flex-end',position:'absolute',right:'0'}}>

          <span className=" badge rounded-pill bg-danger">{source}  
              </span>
            </div>
            <img src={!imageUrl?"https://images.hindustantimes.com/tech/img/2023/03/13/1600x900/galaxy-4253100_640_1669619302531_1678670981787_1678670981787.jpg":imageUrl} alt="" className="card-img-top" style={{height:"300px"}} />
            <div className="card-body">
              <h5 className="card-title">{title} </h5>
              <p className="card-text">{description}...</p>
              <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
              <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
            </div>
          </div>
            
     </>
    )
}

export default Newsitem
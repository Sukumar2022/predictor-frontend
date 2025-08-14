import React from 'react'

const Service = () => {
  return (
    <>
        <div className="service">
        <h1>Find the best store for your product...</h1>
        <p>Enter a <b><u>Product Name</u></b> or <b><u>Image</u></b> to get advice based on real customer feedback</p>
        <div className="form-div">
          <form action="" method="post">
            <input type="text" name="" id="" placeholder="Search Product"/>
            <button type="submit">Search</button>
          </form>
        </div>
        <div className="form-div">
          <form action="" method="post">
            <input type="file" name="" id=""/> 
            <button type="submit">Search</button>
          </form>
        </div>
        <div className="output-container">
          {/* shop card start */}
          <div className="shop-card">
            <div className="logo">
              <img src="images/amazon.png" alt=""/>
            </div>
            <h4>Reliability:94%</h4>
            <p><i className="ri-star-fill"></i> 4.6- Delivery in 3 days </p>
            <div className="tags">
              <span>Fast Delivery</span>
              <span>Easy Return</span>
              <span>Genuine</span>
            </div>
          </div>
          <div className="shop-card">
            <div className="logo">
              <img src="images/flipkart.png" alt=""/>
            </div>
            <h4>Reliability:94%</h4>
            <p><i className="ri-star-fill"></i> 4.6- Delivery in 3 days </p>
            <div className="tags">
              <span>Fast Delivery</span>
              <span>Easy Return</span>
              <span>Genuine</span>
            </div>
          </div>
        </div>
       </div>
    </>
  )
}

export default Service
import React from 'react'

const Feedback = () => {
  return (
    <>
    <div className='feedback'>
        <h2>Feedback Form</h2>
        <form action="" method="POST">
            <label for="name">Full Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required/>

            <label for="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required/>

            <label for="rating">Rating</label>
            <select id="rating" name="rating" required>
                <option value="">-- Select Rating --</option>
                <option value="5">⭐⭐⭐⭐⭐ - Excellent</option>
                <option value="4">⭐⭐⭐⭐ - Good</option>
                <option value="3">⭐⭐⭐ - Average</option>
                <option value="2">⭐⭐ - Poor</option>
                <option value="1">⭐ - Very Bad</option>
            </select>
            <label for="feedback">Your Feedback</label>
            <textarea id="feedback" name="feedback" placeholder="Write your review..." required></textarea>
            <button type="submit">Submit Feedback</button>
        </form>
    </div>
    </>
  )
}

export default Feedback
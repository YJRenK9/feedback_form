import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
    rating: '0' // Default rating is set to 0 (no rating)
  });

  const handleInputChange = (e) => {
    // creates 2 variables, one gets the name of the input field, and the other gets the value of the input field
    const { name, value } = e.target;
    // updates the formData state by spreading the previous data and updating the specific field that changed 
    setFormData((prevData) => ({
      ...prevData,
      [name]: value // must use square brackets to dynamically update the field based on the name of the input
    }));
  };

  const handleSubmit = (e) => {
    // Prevent the default form submission behavior (porevents the page from refreshing)
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.feedback || formData.rating === '0') {
        alert('Please fill out all fields before submitting your feedback.');
        return; // Exit the function if validation fails
    }

    // Handle form submission logic here
    const isConfirmed = window.confirm(`Please confirm your feedback:\n\nName: ${formData.name}\nEmail: ${formData.email}\nFeedback: ${formData.feedback}\nRating: ${formData.rating} Stars`);

    // If the user confirms, log the feedback and show a thank you message
    if (isConfirmed) {
      console.log('Feedback submitted:', formData);

      // Display a thank you message after submission
      alert('Thank you for your feedback!');
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        feedback: '',
        rating: '0' // Reset rating to default
      });

      // Uncheck all radio buttons after submission
      const radioButtons = document.querySelectorAll('input[name="rating"]');
      radioButtons.forEach((button) => {
        button.checked = false;
      });
    }

    console.log(formData);
  };

  return (
    <>
    <nav>
    Tell Us What You Think
    </nav>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} />
        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleInputChange} />
        <textarea name="feedback" placeholder="Your Feedback" value={formData.feedback} onChange={handleInputChange}></textarea>
        <div className='rating'>
          <span>Rate your experience:</span>
          <div>
            <label>
              <input type="radio" name="rating" value="1" onChange={handleInputChange} />
              1 Star
            </label>
            <label>
              <input type="radio" name="rating" value="2" onChange={handleInputChange} />
              2 Stars
            </label>
            <label>
              <input type="radio" name="rating" value="3" onChange={handleInputChange} />
              3 Stars
            </label>
            <label>
              <input type="radio" name="rating" value="4" onChange={handleInputChange} />
              4 Stars
            </label>
            <label>
              <input type="radio" name="rating" value="5" onChange={handleInputChange} />
              5 Stars
            </label>
          </div>
          </div>
          
        
        <button type="submit">Submit Feedback</button>
      </form>
    </>
  );
};

export default FeedbackForm;

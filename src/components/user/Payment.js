import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Payment = () => {
  const [patientId, setPatientId] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();

    // Simulate payment processing
    try {
      // Here, you would typically send a request to your backend to process the payment
      // and update the billing record for the patient
      // For simulation purpose, let's just add a timeout to mimic processing time
      setMessage('Processing payment...');
      setTimeout(() => {
        setMessage('Payment processed successfully!');
      }, 2000); // Simulate 2 seconds of processing time
    } catch (error) {
      console.error('Error processing payment:', error);
      setMessage('Failed to process payment. Please try again later.');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Payments and Billing</h2>
              <form onSubmit={handlePaymentSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    value={patientId}
                    onChange={(e) => setPatientId(e.target.value)}
                    placeholder="Patient ID"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    className="form-control"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Amount ($)"
                    required
                  />
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary btn-block">Process Payment</button>
                </div>
                {message && <p className="text-center">{message}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;

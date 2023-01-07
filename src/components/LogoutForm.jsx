import { useState } from 'react' ;

const LogoutForm =() => {
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // remove username and password from localStorage
    localStorage.removeItem('username');
    localStorage.removeItem('password');

    window.location.reload();
    setError('');
  };

  return ( 
    <div className="wrapper-01">
        <div className="form-01">
          <form onSubmit={handleSubmit}>
            <div align="center">
              <button type="submit" className="button-01">
                <span>Logout</span>
              </button> 
            </div>
          </form>
          <h2 className="error">{error}</h2>  
        </div>
    </div>
  );
};

export default LogoutForm;
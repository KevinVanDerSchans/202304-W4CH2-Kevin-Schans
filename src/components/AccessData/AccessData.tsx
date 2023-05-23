import './AccessData.css';

export function AccessDataForm() {
  return (
    <form aria-label="form">
      <div className='form-container'>

        <div>
          <label htmlFor="userName">Username:</label>
          <input type="text" id="userName" required/>
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" required/>
        </div>

        <div>
          <label htmlFor="repeatPassword">Repeat your password:</label>
          <input type="password" id="repeatPassword" required/>
        </div>
      </div>

      <div className='form-container'>
        <p>Select your type account:</p>
        <select id="selectAccountType">
          <option value="personal">Personal</option>
          <option value="pro">Pro</option>
          <option value="business">Business</option>
        </select>
      </div>

      <div className="button-container">
        <button type="submit">Access</button>
      </div>
  </form>
  )
}

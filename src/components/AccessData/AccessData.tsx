import './AccessData.css';

export function AccessDataForm() {
  return (
    <form aria-label="form">
      <div className='form-container'>
        <label htmlFor="userName">Username:</label>
        <input type="text" id="userName" required/>

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" required/>

        <label htmlFor="repeatPassword">Repeat your password:</label>
        <input type="password" id="repeatPassword" required/>
      </div>

      <div className='form-container'>
        <select id="selectAccountType">
          Select your type account:
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

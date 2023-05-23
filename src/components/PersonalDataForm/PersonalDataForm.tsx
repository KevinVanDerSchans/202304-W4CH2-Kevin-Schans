import './PersonalDataForm.css';

export function PersonalDataForm() {
  return (
    <form aria-label="form">
      <div className='form-container'>
        <label htmlFor="name">Your name:</label>
        <input type="text" id="name"/>

        <label htmlFor="lastName">Your last name:</label>
        <input type="text" id="lastName"/>

        <label htmlFor="birthDate">Select your birth date:</label>
        <input type="date" id="birthDate"/>
      </div>

      <div className='form-container'>
        <p>Select your gender, please:</p>

        <label htmlFor="maleOption">
          <input type="radio" id="maleOption" value="Male" checked/>
          Male
        </label>

        <label htmlFor="femaleOption">
          <input type="radio" id="femaleOption" value="Female"/>
          Female
        </label>

        <label htmlFor="otherOption">
          <input type="radio" id="otherOption" value="Other"/>
          Other
        </label>

        <label htmlFor="preferNotToMentionOption">
          <input type="radio" id="preferNotToMentionOption" value="Prefer not to mention"/>
          Prefer not to mention
        </label>
      </div>

      <div className='form-container'>
        <label htmlFor="email">Type your e-mail:</label>
        <input type="email" id="email" />

        <div className="newsletter-container">
          <p>Would you like to receive our newsletter?</p>

          <label htmlFor="yesNewsletter">Yes, please!</label>
          <input type="checkbox" id="yesNewsletter"/>

          <label htmlFor="noNewsletter">No, thank you.</label>
          <input type="checkbox" id="noNewsletter"/>
        </div>
      </div>

      <div className="button-container">
        <button type="submit">Send</button>
      </div>
    </form>
  )







}

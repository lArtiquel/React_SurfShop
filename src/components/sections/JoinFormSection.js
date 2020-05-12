import React, { useEffect, useState } from 'react'
import '../../res/styles/surf-theme.min.css'
import '../../res/styles/forms.css'

function JoinFormSection() {
  const [emailInput, setEmailInput] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  useEffect(() => {
    const subscription = document.getElementById('subscription')
    const subscriptionControl = document.getElementById(
      'subscription-email-control'
    )

    const addFocusClass = (event) => {
      subscription.classList.add('focus')
    }

    const removeFocusClass = (event) => {
      if (emailInput === '') {
        subscription.classList.remove('focus')
      }
    }

    subscriptionControl &&
      subscriptionControl.addEventListener('focus', addFocusClass)

    subscriptionControl &&
      subscriptionControl.addEventListener('blur', removeFocusClass)

    return () => {
      subscriptionControl &&
        subscriptionControl.removeEventListener('focus', addFocusClass)
      subscriptionControl &&
        subscriptionControl.removeEventListener('blur', removeFocusClass)
    }
  }, [emailInput])

  const handleInputChange = (e) => {
    setEmailInput(e.target.value)
  }

  const handleSubscription = (e) => {
    e.preventDefault()
    if (emailInput.trim() !== '') {
      setSubscribed(true)
      setEmailInput('')
    }
  }

  return (
    <div className="contact-bg">
      <article className="centered container w-container">
        <div className="bottom middle-line" data-ix="float-in-on-scroll"></div>

        <div className="form-wrapper w-form">
          {!subscribed ? (
            <>
              <h2 className="sub-heading" data-ix="float-in-on-scroll-2">
                Join the Club
              </h2>
              <p className="max-500 text-bottom" data-ix="float-in-on-scroll-3">
                C'mon boi, I know you wanna be here. So, don't be a wack and
                click the button!
              </p>
              <form
                className="form w-clearfix"
                data-ix="float-in-on-scroll-3"
                data-name="Email Form"
                id="email-form"
                name="email-form">
                <div id="subscription" className="form-group w-clearfix">
                  <label
                    className="form-label"
                    htmlFor="subscription-email-control">
                    Your Email:
                  </label>
                  <input
                    className="form-control w-input"
                    data-name="Email"
                    id="subscription-email-control"
                    maxLength="256"
                    name="Email"
                    required="required"
                    type="email"
                    onChange={handleInputChange}
                  />
                </div>
                <input
                  className="submit-button w-button"
                  type="submit"
                  value="Submit"
                  onClick={handleSubscription}
                />
              </form>
            </>
          ) : (
            <>
              <h2 className="sub-heading" data-ix="float-in-on-scroll-2">
                Congrats! You've joined the club.
              </h2>
              <p className="max-500 text-bottom" data-ix="float-in-on-scroll-3">
                Now we can reach you by email. We'll send you our special offers
                and events. Thanks, see you soon, surfer!
              </p>
            </>
          )}
        </div>
      </article>
    </div>
  )
}

export default JoinFormSection

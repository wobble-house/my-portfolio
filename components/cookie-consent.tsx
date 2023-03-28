'use client';
import React from 'react';
import CookieConsent from 'react-cookie-consent';

export function CookieAccept(){
  return (
    <CookieConsent
    debug={true}
      enableDeclineButton
      flipButtons
      location="top"
      buttonText="I understand"
      cookieName="YourCookieName"
      buttonStyle={{
        color: '#000',
        fontSize: '15px',
      }}
      declineButtonStyle={{
        margin: '10px 10px 10px 0',
      }}
      expires={450}
      onAccept={(acceptedByScrolling) => {
        if (acceptedByScrolling) {
          // triggered if user scrolls past threshold
          alert("Accept was triggered by user scrolling");
        } else {
          alert("Accept was triggered by clicking the Accept button");
        }
      }}
      onDecline={() => {
        alert("nay!");
      }}
    >
      This website uses cookies
    </CookieConsent>
  );
};

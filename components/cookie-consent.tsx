'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import CookieConsent from 'react-cookie-consent';

export function CookieAccept(){
  const router = useRouter()
  return (
    <CookieConsent
      enableDeclineButton
      flipButtons
      location="bottom"
      buttonText="I understand"
      cookieName="GA-COOKIES"
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
          router.refresh();
        } else {
          router.refresh();
        }
      }}
      onDecline={() => {
        alert("..loser");
        router.refresh();
      }}
    >
      Both this website and the owner of this website use cookies.  This site uses cookies for basic web analytics and the owner of this site uses cookies for snack consumption.
    </CookieConsent>
  );
};

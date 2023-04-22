'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import CookieConsent, { resetCookieConsentValue } from 'react-cookie-consent';

export function CookieAccept({data}){
  const router = useRouter()
  const handleAccept = (acceptedByScrolling) => {
    if (acceptedByScrolling) {
      router.refresh();
    } else {
      router.refresh();
    }
  }
  
  const handleDecline = () => {
      if (confirm("This cookie will be used for Google Analytics.  You can still decline by clicking 'cancel', but it really helps me understand more about traffic to my portfolio if you allow.")){
        resetCookieConsentValue('GA-COOKIES');
        router.refresh();
        } 
      else {
        console.log("Alrighty!");
        resetCookieConsentValue('_ga');
        router.refresh();
        } 
      } 

  if (data) return (
    <CookieConsent
      enableDeclineButton
      flipButtons
      location="bottom"
      buttonText="I understand"
      cookieName="GA-COOKIES"
      visible="hidden"
      buttonStyle={{
        color: '#000',
        fontSize: '15px',
      }}
      declineButtonStyle={{
        margin: '10px 10px 10px 0',
      }}
      expires={450}
      onAccept={handleAccept}
      onDecline={handleDecline}
    >
      Both this website and the owner of this website use cookies.  This site uses cookies for basic web analytics and the owner of this site uses cookies for snack consumption.
    </CookieConsent>
  ); else return (
    <CookieConsent
    enableDeclineButton
    flipButtons
    location="bottom"
    buttonText="I understand"
    cookieName="GA-COOKIES"
    visible="visible"
    buttonStyle={{
      color: '#000',
      fontSize: '15px',
    }}
    declineButtonStyle={{
      margin: '10px 10px 10px 0',
    }}
    expires={450}
    onAccept={handleAccept}
    onDecline={handleDecline}
  >
    Both this website and the owner of this website use cookies.  This site uses cookies for basic web analytics and the owner of this site uses cookies for snack consumption.
  </CookieConsent>
  )
};

import React from 'react'
import classes from './TeamOfService.module.css'
const TeamOfService = () => {
  return (
    <div className={classes['team-container']}>
      <h2>Terms of service</h2>
      <p>
        Welcome to eDirr! owned and operated by Dan Energy Research and
        Development company. eDirr provides an online platform, process and
        service that allows users to: connect directly with each other to share
        money amongst themselves via a Rotational Savings Group.
      </p>
      <p>
        YOU UNDERSTAND AND AGREE THAT EDIRR IS NOT A PARTY TO ANY AGREEMENTS
        ENTERED INTO BETWEEN USERS, AND THAT EDIRR IS NOT A BANK, A MONEY
        SERVICES BUSINESS, A MONEY TRANSMITTER, OR AN ISSUER OF STORED VALUE
        PRODUCTS. EDIRR AND THE SERVICE ENABLE USERS TO COMMUNICATE DIRECTLY AND
        TO SHARE FUNDS AMONGST THEMSELVES. EDIRR HAS NO CONTROL OVER THE CONDUCT
        OF USERS OF THE SERVICE, ANY INFORMATION EXCHANGED BETWEEN USERS, OR ANY
        SHARING DECISIONS BY OR AMONG USERS, AND DISCLAIMS ALL LIABILITY IN THIS
        REGARD.
      </p>
      <p>
        EDIRR DOES NOT REVIEW, ENDORSE, RECOMMEND, OR OTHERWISE PROVIDE ANY
        WARRANTY OR GUARANTEE WITH RESPECT TO ANY USER,OR USER GROUP. IT IS THE
        SOLE RESPONSIBILITY OF THE EDIRR CREATOR TO INVESTIGATE THE INFORMATION
        AVAILABLE ABOUT ANOTHER USER OR A GROUP.
      </p>
    </div>
  );
}

export default TeamOfService
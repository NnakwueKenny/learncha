import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ClimateHeader from './components/ClimateHeader';
import { useNavigate } from "react-router-dom";
import AuthUser from './AuthUser';
import Intro from './components/Intro';

const ClimateIndex = () => {
    const isActiveUser = AuthUser();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isActiveUser) {
            console.log('returning: ', isActiveUser);
            navigate("/climate/login");
        }
    });

  return (
    <section className="promo relative w-full flex flex-col items-center py-4">
        <ClimateHeader title='Climate'/>
        <Intro />
        <div class="w-full max-w-4xl h-full flex flex-col items-center justify-start gap-6 px-6 mt-4 border-2 border-dashed">
            Content goes here;
        </div>
    </section>
  )
}

export default ClimateIndex
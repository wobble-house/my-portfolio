'use client';
import React, { useState, useEffect, ReactElement } from "react";
import { useRouter } from "next/navigation";
import { NextPage } from "next";
import { NameLarge } from "./name";

const Welcome: NextPage = (): ReactElement => {
    const [redirectSeconds, setRedirectSeconds] = useState<number>(5);
    const router = useRouter();
    let query = null
    
    useEffect(() => {
        if (query == null) {
            if (redirectSeconds == 0) {
                query = "/about"
                router.push(query.toString());
                return;
            }
       
            setTimeout(() => {
                console.log(redirectSeconds);
                setRedirectSeconds((redirectSeconds) => redirectSeconds - 1);
            }, 1000)
        }
       }, [redirectSeconds]);
    
    return (
            <div>
                <NameLarge/>
                <h2 className="animate-pulse pt-20 grow font-bold align-middle text-center leading-tight text-neutral-500 mx-auto">
                Welcome! You&apos;ll be redirected in {redirectSeconds}
                </h2>
            </div>
    );
    };
    
    export default Welcome;
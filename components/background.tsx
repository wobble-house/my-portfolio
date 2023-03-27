'use client';
import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

export default function Background(){
    const particlesInit = useCallback(async (engine: Engine) => {

        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
    }, []);
    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#FFFDE7",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "repulse",
                        },
                        onHover: {
                            enable: true,
                            mode: "bubble",
                            parallax: {
                                enable: false,
                                force: 2,
                                smooth: 10
                            }
                        },
                        resize: {
                            delay: 0.5,
                            enable: true,
                        },
                    },
                    modes: {
                        attract:{
                            distance: 200,
                            duration: 0.4,
                            easing:	"ease-out-quad",
                            factor: 1,
                            maxSpeed: 50,
                            speed: 1,
                        },
                        bounce: {
                            distance: 200
                        },
                        bubble:{
                            distance: 250,
                            duration: 2,
                            mix: false,
                            opacity: 0,
                            size: 0,
                            divs:{	
                                distance: 200,
                                duration: 0.4,
                                mix: false,
                            },
                        },
                        connect:{
                            distance: 80,
                            links:{
                                opacity: 0.5
                            },
                            radius:	60,
                        },
                        grab: {
                            distance: 400,
                            links: {
                                blink: false,
                                consent: false,
                                opacity: 1,
                            },
                        },
                        push: {
                            default: true,
                            quantity: 4,
                        },
                        remove:{
                            quantity: 2,
                        },
                        repulse: {
                            distance: 400,
                            duration: 0.4,
                            factor: 100,
                            speed: 1,
                            maxSpeed: 50,
                            easing: "ease-out-quad",
                            divs: {
                                distance: 200,
                                duration: 0.4,
                                factor: 100,
                                speed: 1,
                                maxSpeed: 50,
                                easing: "ease-out-quad",
                            }},
                        slow: {
                            factor:	3,
                            radius:	200
                        },
                        trail:{
                            delay: 1,
                            pauseOnStop: false,
                            quantity: 1,
                        },
                        light:{
                            area:{
                                gradient:{
                                    start:{
                                        value: "#ffffff",
                                    },
                                    stop: {
                                        value: "#000000",
                                    },
                                    radius: 1000,
                                },
                                shadow:{
                                    color:{
                                        value: "#000000",
                                    },
                                    length: 2000,
                                },
                    },
                },
            },
                particles: {
                    color: {
                        value: "#A297C9",
                    },
                    links: {
                        color: "#C4E7E4",
                        distance: 100,
                        enable: true,
                        opacity: 0.5,
                        width: 4,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 200,
                        },
                        value: 90,
                    },
                    opacity: {
                        value: 1,
                    },
                    shape: {
                        type: "square",
                    },
                    size: {
                        value: { min: 0.5, max: 2 },
                    },
                },
                detectRetina: true,
            }}}
        />
    );
};


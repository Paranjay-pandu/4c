import gsap from "gsap";
import { useEffect } from "react";


const Hometest = ()=>{
    useEffect(()=>{
        const timeline = gsap.timeline({
            repeat: "-1",
            // yoyo: true,
            delay: 0.2
        });
        timeline.to(".Headingtest", {
            x: 100,
            y: 300,
            duration: 0.5,
            ease: "bounce.out",
            stagger: 0.2,
        })
        timeline.to(".Headingtest", {
            x: 500,
            y: 500,
            duration: 0.5,
            // yoyo: true,
            stagger: 0.2,
            ease: "bounce.out"
        })
        timeline.to(".Headingtest", {
            x: 800,
            y: 200,
            duration: 0.5,
            stagger: 0.2,
            ease: "circ.inOut"
        })
        timeline.to(".Headingtest", {
            x: 0,
            y: 0,
            duration: 0.5,
            stagger: 0.2,
            ease: "power2.in"
        })
    }, [])

    return (
        <>
            {/* <h1 className="Headingtest">This is the Heading in the Hometest Page</h1> */}
            <div className="Headingtest"></div>
            <div className="Headingtest"></div>
            <div className="Headingtest"></div>
            <div className="Headingtest"></div>
        </>
    )
}

export default Hometest;
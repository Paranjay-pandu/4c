import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const MousePointer = () => {
    const mouse = useRef(null);

    useEffect(() => {
        const pointer = mouse.current;
        const mousemove = (e) => {
            console.log(e)
            gsap.to(pointer, { duration: 0.3, x: e.pageX, y: e.pageY});
        }
        window.addEventListener('mousemove', mousemove);
        window.addEventListener("click", () => {
            gsap.fromTo(pointer, { scale: 1 }, { scale: 0.7, duration: 0.2, yoyo: true, repeat: 1 });
        });


    }, []);

    return (
        <div ref={mouse} className="h-4 w-4 fixed pointer-events-none rounded-[50%] bg-white opacity-75" style={{ transform: "translate(-50%, -50%)" }}>

        </div>
    );
}

export default MousePointer;
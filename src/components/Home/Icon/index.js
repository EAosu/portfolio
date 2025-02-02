import './index.scss';
import EIcon from '../../../assets/images/e-icon.png';
import { useRef } from 'react';
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Icon = () => {
    const bgRef = useRef();
    const outlineIconRef = useRef();
    const solidIconRef = useRef();

    useGSAP(() => {
        gsap.registerPlugin(DrawSVGPlugin);
        gsap.timeline()
        .to(bgRef.current, {
            duration: 1,
            opacity: 1
        })
        .from(outlineIconRef.current, {
            drawSVG: 0,
            duration: 20
        })

        gsap.fromTo(
            solidIconRef.current, {
                opacity: 0
            }, {
                opacity: 1,
                delay: 4,
                duration: 4
            }
        )
    });

    return (
        <div className="logo-container" ref={bgRef}>
            <img ref={solidIconRef} className='solid-icon' src={EIcon} alt="E"/>

            <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                preserveAspectRatio="xMidYMid meet"
            >
                <g className="svg-container" transform="translate(0,512) scale(0.1,-0.1)" fill="#000000" stroke="none">
                    <path ref={outlineIconRef} d="M610 2560 l0 -2560 1950 0 1950 0 0 560 0 560 -1320 0 -1320 0 0 505 0 505 1185 0 1185 0 0 550 0 550 -1185 0 -1185 0 0 385 0 385 1275 0 1275 0 0 560 0 560 -1905 0 -1905 0 0 -2560z m3510 2000 l0 -260 -1275 0 -1275 0 0 -685 0 -685 1185 0 1185 0 0 -250 0 -250 -1185 0 -1185 0 0 -805 0 -805 1320 0 1320 0 0 -260 0 -260 -1650 0 -1650 0 0 2260 0 2260 1605 0 1605 0 0 -260z"/>
                </g>
            </svg>

        </div>
    )
}

export default Icon;
import './index.scss';
import EIcon from '../../assets/images/e-icon.png';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Icon from './Icon';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const hiArray = ['H','i',','];
    const imArray = ['I', "'", 'm'];
    const nameArray = ['l','y', ' ','A','s','a','f'];
    const jobArray = ['s','o','f','t','w','a','r','e', ' ','d','e','v','e','l','o','p','e','r'];

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
    }, []);


    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={hiArray} idx={10}></AnimatedLetters>
                    <br/>
                    <AnimatedLetters letterClass={letterClass} strArray={imArray} idx={13}></AnimatedLetters>
                    <img src={EIcon} alt="developer"/>
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}></AnimatedLetters>
                    <br/>
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={21}></AnimatedLetters>
                </h1>
                <h2> Fullstack Developer / Problem Solver </h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
            <Icon/>
        </div>
    )
}

export default Home;
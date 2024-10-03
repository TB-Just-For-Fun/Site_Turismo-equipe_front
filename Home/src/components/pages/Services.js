import React,{useState, useEffect} from 'react'
import styled from "styled-components";
import { Container, Row, Col } from 'reactstrap';
import {Link} from 'react-router-dom';
import '../../App.scss';
import Loader from '../Loader';


// specifying our image path.
const imagePath = process.env.PUBLIC_URL + '/images/';


// a functional sub component that create various types of buttons.
const TagButton = ({name, handleSetTag, tagActive})=>{

    return(
        <button className={`tag ${tagActive ? 'active': null}`} onClick={()=>handleSetTag(name)}>
            {name.toUpperCase()}
        </button>
    );

}

function Services() {
 
    const [tag, setTag] = useState('all');
    const [filteredServices, setFilteredServices] = useState([]);
    // for loader to open or close
    const [open, setOpen] = useState(true);

   
    // following useState is for loader 
    useEffect(()=>{
        setInterval(() => {
            if (document.readyState === 'complete') {
                setOpen(false);
            }
          }, 100);
    },[])

    return  (
        <div>
            <h1>Our Services</h1>
            <h1>Our Services</h1>
            <h1>Our Services</h1>
            <h1>Our Services</h1>
            <h1>Our Services</h1>
            <h1>Our Services</h1>
            <h1>Our Services</h1>
            <h1>Our Services</h1>
            <h1>Our Services</h1>
            <h1>Our Services</h1>
            <h1>Our Services</h1>
            <h1>Our Services</h1>
            <h1>Our Services</h1>
            <h1>Our Services</h1>
            <h1>Our Services</h1>
            <h1>Our Services</h1>
            <h1>Our Services</h1>
            <h1>Our Services</h1>
            <h1>Our Services</h1>
            

        </div>
    );
}


export default Services

import React from "react";
import CurrentDate from "../components/CurrentDate";
import Wishesh from "../components/Wishesh";
import CalOutput from '../components/CalOutput'
// import BlogCards from '../components/BlogCards'
import Game from "../components/Game";
import Inc from "../components/Inc"
import OnEvent from "../components/OnEvent";
import FormHandle from "../components/FormHandle";
import LognForm from "../components/LognForm";
// import Create from "../components/Keeps/Create";
import Keep from "../components/Keeps/Keep";
import IncDec from "../components/IncDec";
import Accordion from "../components/Acordions/Accordion";
// import AccordianChild from "../components/Acordions/AccordianChild";
import ContextMain from "../components/Context/ContextMain";
import TitleChange from "../components/TitleChange";
import CovidDashboard from "../components/Covid/CovidDashboard";
import PokemonApi from "../components/Covid/PokemonApi";
import Search from "../components/Search"
// import Portfolio from "../components/Portfolio/Portfolio"
import Portest from "../components/Portfolio/Portest";

const TestJsx = () => {
  return (
    <>
      <section>
        <div className="row">
          <div className="col-md-6" style={{background:"#27e0ae"}}>
            <CurrentDate />
            <hr />
            <Wishesh />
          </div>
          <div className="col-md-6" style={{background:"#ffc107"}}>
            <CalOutput />
            <hr />
            <Game />
          </div>
          <div className="col-md-6" style={{background:"#0dcaf0"}}>
            <Inc />
            <hr />
          </div>
          <div className="col-md-6 p-50" style={{background:"#0d6efd", color:"#ffffff"}}>
            <OnEvent />
            <FormHandle />
          </div>
          <div className="col-md-6 p-20" style={{background:"#dc3545"}}>            
            <LognForm />
          </div>
          <div className="col-md-6" style={{background:"#198754"}}>            
            {/* <Create /> */}
            <IncDec />
          </div>
          <div className="col-md-12">            
            <Keep />
          </div>
          <div className="col-md-6" style={{background:"#333954"}}>            
            <Accordion />
          </div>
          <div className="col-md-6" style={{background:"#ededed"}}>            
            <ContextMain />
            <TitleChange />
          </div>
          <div className="col-md-12">            
            <CovidDashboard />
          </div>
          <div className="col-md-6" style={{background:"#8566aa"}}>            
            <PokemonApi />
          </div>
          <div className="col-md-6" style={{background:"#d7b09c"}}>            
            <Search />
          </div>
          {/* <div className="col-md-12" style={{background:"#ededed"}} >            
            <Portfolio />
          </div> */}
          <div className="col-md-12" style={{background:"#999"}} >            
            <Portest />
          </div>
        </div>
      </section>

      {/* <BlogCards /> */}
      
      
    </>
  );
};

export default TestJsx;

import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "../Styles/Home.css"
import { Link, useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const [Jobs, setData] = useState([]);
  let [pageNumber, setPageNumber] = useState(1);
  const [perpage, setDataperpage] = useState(12);
  const [countpage, setcountpage] = useState(1);
  const [Searched_text, setSearched_Text] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://expertiabackend.herokuapp.com/jobdetail/?page=${pageNumber}&pagesize=${perpage}`
      )
      .then((res) => {
        setData(res.data.job);
        setcountpage(res.data.countpage);
        navigate(`/?page=${pageNumber}&pagesize=${perpage}`);
      });
  }, [pageNumber]);

  const handleSearch = () => {
    axios
      .get(
        `https://expertiabackend.herokuapp.com/jobdetail/search/${Searched_text}/?page=${pageNumber}&pagesize=${perpage}`
      )
      .then((response) => {
        setData(response.data);
      });
  };

  const SortbyPrice = async (e) => {
    let jobs = await fetch(
      `https://expertiabackend.herokuapp.com/jobdetail?page=${pageNumber}&pagesize=${perpage}&sort=salary&sortvalue=${e.target.value}`
    );
    let jobData = await jobs.json();

    navigate(
      `/?page=${pageNumber}&pagesize=${perpage}&sort=salary&sortvalue=${e.target.value}`
    );
    setData(jobData.job);
    setcountpage(jobData.countpage);
  };

  const filterbyQTY=async(e)=>{
     let jobs= await fetch(`https://expertiabackend.herokuapp.com/jobdetail/?filter=location&filtervalue=${e.target.value}`)
    let jobData=await jobs.json()
    navigate(`/?page=${pageNumber}&pagesize=${perpage}&filter=location&filtervalue=${e.target.value}`)
    setData(jobData.job)
    setcountpage(jobData.countpage)
   
    
 }

  const Nextpage = () => {
    if (pageNumber + 1 <= countpage) setPageNumber(pageNumber + 1);
  };
  const Prevpage = () => {
    if (pageNumber > 1 && countpage > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  return (
    <div className="Container">
    <div className="barDiv">
      <div className="div1">
        <input
          type="text"
          placeholder="Search Job"
          onInput={(e) => {
            setSearched_Text(e.target.value);
          }}
          list="position"
        />
        <datalist id="position">
          <option>Software Engineer</option>
          <option>Website Designer</option>
          <option>Backend Developer</option>
          <option>Fronted Developer</option>
          <option>WordPress Developer</option>
          <option>Full Stack Developer</option>
          <option>Drupal Manager</option>
          <option>Website Developer</option>
        </datalist>
        <button className="searchbtn"
          onClick={() => {
            handleSearch();
          }}
        >
          Search
        </button>
      </div>

      <div className="div2">
        <select onChange={SortbyPrice}>
          <option value="">sort by Salary</option>
          <option value="-1">High To Low</option>
          <option value="1">Low To High</option>
        </select>
      </div>


      
      <div className="div3">
            <select onChange={filterbyQTY}>
               <option value="">Filter By Location</option>
                <option value="Bengaluru">Bengaluru</option>
                <option value="Delhi">Delhi</option>
                <option value="Pune">Pune</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Surat">Surat</option>
                <option value="Hyderabad">Hyderabad</option>
               
           </select>
        </div>
    </div>
      <hr></hr>
      <div id="job_Box">
      {Jobs.map((e, i) => {
        return (
          <div key={e._id} id="single_job" >
            <Link to={`/${e._id}`}  style={{textDecoration: 'none'}}>
              <div className="detail">
                {" "}
                <h3 >Company :{e.company}</h3>
                <p className="p1">Role: {e.role}</p>
                <p>Location: {e.location}</p>
                <p>Salary: ₹ {e.salary}</p>
                <hr></hr>
                <button>More details</button>
               
              </div>
            </Link>
          </div>
        );
      })}</div>
      <div className="paginationbtn">
      <button onClick={() => Prevpage()} className="button1">Prev</button>
      <button onClick={() => Nextpage()} className="button2">Next</button></div>
    </div>
  );
};

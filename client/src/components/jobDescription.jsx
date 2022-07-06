import { useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "../Styles/jobDescription.css"
export const JobDescription= () => {
	const { id } = useParams();
	const [jobDetail, setjobDetail] = useState({});
    const [status,setStatus] = useState(false)
	

	useEffect(() => {
		fetch();
	}, []);

	const fetch = async () => {
		const { data } = await axios(`https://expertiabackend.herokuapp.com/jobdetail/${id}`);
		setjobDetail(data);
	};

	return (
		<div className='user_details' style={{paddingTop:"10%"}}>

         <div className='box'><h1>COMPANY : {jobDetail.company}</h1>
		 <hr></hr>
         <p>Role:{jobDetail.role}</p>
         <p>Location:{jobDetail.location}</p> 
         <p>Salary: ₹ {jobDetail.salary}</p>
         <p>Description:{jobDetail.description}</p>
		 <div>Full-time</div> </div>
       <button className='button4'
	   onClick={()=>{
        alert('Congrutultaions! You have applied Successfully')
        setStatus(true)
         }}  >{status===false? "Apply Now":"Applied"}</button>
     
      </div>
 
        

		
	);
};

import React, { useState } from "react";

const Form = ({ onSubmit }) => {
  const [source, setSource] = useState("ENTER SOURDE STATION");
  const [destination, setDestination] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(source, destination);
  };

  return (
    <form onSubmit={handleSubmit} className="frm-div">
      <div className="form-group">
        {/* <label htmlFor="source">Source City: </label> */}
        <select
          id="select"
          className="form-control"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          required
        >
          <option value="">Select Source City</option>

          <option value="Majlis Park">Majlis Park</option>
          <option value="Azadpur">Azadpur</option>
          <option value="Shalimar Bagh">Shalimar Bagh</option>
          <option value="Netaji Subhash Place">Netaji Subhash Place</option>
          <option value="Shakurpur">Shakurpur</option>
          <option value="Punjabi Bagh West">Punjabi Bagh West</option>
          <option value="ESI Hospital">ESI Hospital</option>
          <option value="Rajouri Garden">Rajouri Garden</option>
          <option value="Mayapuri">Mayapuri</option>
          <option value="Nariana Vihar">Nariana Vihar</option>
          <option value="Delhi cantt">Delhi cantt</option>
          <option value="Durgabai Deshmukh South Campus">
            Durgabai Deshmukh South Campus
          </option>
          <option value="Sir Vishweshwaraiah Moti Bagh">
            Sir Vishweshwaraiah Moti Bagh
          </option>
          <option value="Bhikaji Cama Place">Bhikaji Cama Place</option>
          <option value="Sarojini Nagar">Sarojini Nagar</option>
          <option value="INA">INA</option>
          <option value="South Extension">South Extension</option>
          <option value="Lajpat Nagar">Lajpat Nagar</option>
          <option value="Vinoba Puri">Vinoba Puri</option>
          <option value="Ashram">Ashram</option>
          <option value="Hazrat Nizamuddin">Hazrat Nizamuddin</option>
          <option value="Mayur Vihar Pocket">Mayur Vihar Pocket</option>
          <option value="Trilokpuri Sanjay Lake">Trilokpuri Sanjay Lake</option>
          <option value="East Vinod Nagar - Mayur Vihar-||">
            East Vinod Nagar - Mayur Vihar-||
          </option>
          <option value="Mandawali -West vinod Nagar">
            Mandawali -West vinod Nagar
          </option>
          <option value="IP Extension">IP Extension</option>
          <option value="Anand Vihar ISBT">Anand Vihar ISBT</option>
          <option value="Kardarduma">Kardarduma</option>
          <option value="Karkarduma Court">Karkarduma Court</option>
          <option value="Krishna Nagar">Krishna Nagar</option>
          <option value="East Azad Nagar">East Azad Nagar</option>
          <option value="Welcome">Welcome</option>
          <option value="Jaffrabad">Jaffrabad</option>
          <option value="Maujpur -Babarpur">Maujpur -Babarpur</option>
          <option value="Gokulpuri">Gokulpuri</option>
          <option value="Johri Enclave">Johri Enclave</option>
          <option value="Shiv Vihar">Shiv Vihar</option>
          <option value="Botanical Garden">Botanical Garden</option>
          <option value="Okhla Bird Sanctuary">Okhla Bird Sanctuary</option>
          <option value="Kalindi Kunj">Kalindi Kunj</option>
          <option value="Jasola Vihar Shaheen Bagh">
            Jasola Vihar Shaheen Bagh
          </option>
          <option value="Okhla Vihar">Okhla Vihar</option>
          <option value="Jamia Millia Islamia">Jamia Millia Islamia</option>
          <option value="Sukhdev Vihar">Sukhdev Vihar</option>
          <option value="Okhla NSIC">Okhla NSIC</option>
          <option value="Kalkaji Mandir">Kalkaji Mandir</option>
          <option value="Nehru Enclave">Nehru Enclave</option>
          <option value="Greater Kailash">Greater Kailash</option>
          <option value="Chirag Delhi">Chirag Delhi</option>
          <option value="Panchsheel Park">Panchsheel Park</option>
          <option value="Hauz Khas">Hauz Khas</option>
          <option value="IIT Delhi">IIT Delhi</option>
          <option value="Kashmere Gate">Kashmere Gate</option>
          <option value="Lal Quila">Lal Quila</option>
          <option value="Jama Masjid">Jama Masjid</option>
          <option value="Delhi Gate">Delhi Gate</option>
          <option value="ITO">ITO</option>
          <option value="Mandi House">Mandi House</option>
          <option value="Janpath">Janpath</option>
          <option value="Central Secretariat">Central Secretariat</option>
          <option value="Khan Market">Khan Market</option>
          <option value="JLN Stadium">JLN Stadium</option>
          <option value="Jangpura">Jangpura</option>
          <option value="Moolchand">Moolchand</option>
          <option value="Kailash Colony">Kailash Colony</option>
          <option value="Nehru Place">Nehru Place</option>
          <option value="Govind Puri">Govind Puri</option>
          <option value="Okhla">Okhla</option>
          <option value="Jasola Apollo">Jasola Apollo</option>
          <option value="Sarita Vihar">Sarita Vihar</option>
          <option value="Mohan Estate">Mohan Estate</option>
          <option value="Tughlakabad">Tughlakabad</option>
          <option value="Badarpur">Badarpur</option>
          <option value="Sarai">Sarai</option>
          <option value="NHPC Chowk">NHPC Chowk</option>
          <option value="Mewala Maharajpur">Mewala Maharajpur</option>
          <option value="Sector 28">Sector 28</option>
          <option value="Badkal Mor">Badkal Mor</option>
          <option value="Old Faridabad">Old Faridabad</option>
          <option value="Neelam Chowk Ajronda">Neelam Chowk Ajronda</option>
          <option value="Bata Chowk">Bata Chowk</option>
          <option value="Escorts Mujesar">Escorts Mujesar</option>
          <option value="New Delhi">New Delhi</option>
          <option value="Shivaji Stadium">Shivaji Stadium</option>
          <option value="Dhaula Kuan">Dhaula Kuan</option>
          <option value="Delhi Aerocity">Delhi Aerocity</option>
          <option value="IGI Airport">IGI Airport</option>
          <option value="Dwarka Sector 21">Dwarka Sector 21</option>
          <option value="Rithala">Rithala</option>
          <option value="Rohini West">Rohini West</option>
          <option value="Rohini East">Rohini East</option>
          <option value="Pitam Pura">Pitam Pura</option>
          <option value="Kohat Enclave">Kohat Enclave</option>
          <option value="Netaji Subhash Place">Netaji Subhash Place</option>
          <option value="Keshav Puram">Keshav Puram</option>
          <option value="Kanhaiya Nagar">Kanhaiya Nagar</option>
          <option value="Inderlok">Inderlok</option>
          <option value="Shastri Nagar">Shastri Nagar</option>
          <option value="Pratap Nagar">Pratap Nagar</option>
          <option value="Pul Bangash">Pul Bangash</option>
          <option value="Tis Hazari">Tis Hazari</option>

          <option value="Shastri Park">Shastri Park</option>
          <option value="Seelampur">Seelampur</option>
          <option value="Welcome">Welcome</option>
          <option value="Shahdara">Shahdara</option>
          <option value="Mansarovar Park">Mansarovar Park</option>
          <option value="Jhilmil">Jhilmil</option>
          <option value="Dilshad Garden">Dilshad Garden</option>
          <option value="Samaypur Badli">Samaypur Badli</option>
          <option value="Rohini Sector 18-19">Rohini Sector 18-19</option>
          <option value="Haiderpur Badli Mor">Haiderpur Badli Mor</option>
          <option value="Jahangirpuri">Jahangirpuri</option>
          <option value="Adarsh Nagar">Adarsh Nagar</option>

          <option value="Model Town">Model Town</option>
          <option value="GTB Nagar">GTB Nagar</option>
          <option value="Vishwa Vidyalaya">Vishwa Vidyalaya</option>
          <option value="Vidhan Sabha">Vidhan Sabha</option>
          <option value="Civil Lines">Civil Lines</option>

          <option value="Chandni Chowk">Chandni Chowk</option>
          <option value="Chawri Bazar">Chawri Bazar</option>
          <option value="New Delhi">New Delhi</option>
          <option value="Rajiv Chowk">Rajiv Chowk</option>
          <option value="Patel Chowk">Patel Chowk</option>
          <option value="Central Secretariat">Central Secretariat</option>
          <option value="Udyog Bhawan">Udyog Bhawan</option>
          <option value="Udyog Bhawan">Udyog Bhawan</option>
          <option value="Race Course">Race Course</option>
          <option value="Jor Bagh">Jor Bagh</option>
          <option value="INA">INA</option>
          <option value="AIIMS">AIIMS</option>
          <option value="Green Park">Green Park</option>
          <option value="Hauz Khas">Hauz Khas</option>
          <option value="Malviya Nagar">Malviya Nagar</option>
          <option value="Saket">Saket</option>
          <option value="Qutub Minar">Qutub Minar</option>
          <option value="Chhatarpur">Chhatarpur</option>
          <option value="Sultanpur">Sultanpur</option>
          <option value="Ghitorni">Ghitorni</option>
          <option value="Arjan Garh">Arjan Garh</option>
          <option value="Guru Dronacharya">Guru Dronacharya</option>
          <option value="Sikandarpur">Sikandarpur</option>
          <option value="MG Road">MG Road</option>
          <option value="IFFCO Chowk">IFFCO Chowk</option>
          <option value="Dwarka Sector 21">Dwarka Sector 21</option>
          <option value="Dwarka Sector 8">Dwarka Sector 8</option>
          <option value="Dwarka Sector 9">Dwarka Sector 9</option>
          <option value="Dwarka Sector 10">Dwarka Sector 10</option>
          <option value="Dwarka Sector 11">Dwarka Sector 11</option>
          <option value="Dwarka Sector 12">Dwarka Sector 12</option>
          <option value="Dwarka Sector 13">Dwarka Sector 13</option>
          <option value="Dwarka Sector 14">Dwarka Sector 14</option>
          <option value="Dwarka">Dwarka</option>
          <option value="Dwarka Mor">Dwarka Mor</option>
          <option value="Nawada">Nawada</option>
          <option value="Uttam Nagar West">Uttam Nagar West</option>
          <option value="Uttam Nagar East">Uttam Nagar East</option>
          <option value="Janakpuri West">Janakpuri West</option>
          <option value="Janakpuri East">Janakpuri East</option>
          <option value="Tilak Nagar">Tilak Nagar</option>
          <option value="Subhash Nagar">Subhash Nagar</option>
          <option value="Tagore Garden">Tagore Garden</option>
          <option value="Rajouri Garden">Rajouri Garden</option>
          <option value="Ramesh Nagar">Ramesh Nagar</option>
          <option value="Moti Nagar">Moti Nagar</option>
          <option value="Kirti Nagar">Kirti Nagar</option>
          <option value="Shadipur">Shadipur</option>
          <option value="Patel Nagar">Patel Nagar</option>
          <option value="Rajendra Place">Rajendra Place</option>
          <option value="Karol Bagh">Karol Bagh</option>
          <option value="Jhandewalan">Jhandewalan</option>
          <option value="RK Ashram Marg">RK Ashram Marg</option>
          <option value="Rajiv Chowk">Rajiv Chowk</option>
          <option value="Barakhamba Road">Barakhamba Road</option>
          <option value="Mandi House">Mandi House</option>
          <option value="Pragati Maidan">Pragati Maidan</option>
          <option value="Indraprastha">Indraprastha</option>
          <option value="Yamuna Bank">Yamuna Bank</option>
          <option value="Laxmi Nagar">Laxmi Nagar</option>
          <option value="Nirman Vihar">Nirman Vihar</option>
          <option value="Preet Vihar">Preet Vihar</option>
          <option value="Karkarduma">Karkarduma</option>
          <option value="Anand Vihar">Anand Vihar</option>
          <option value="Kaushambi">Kaushambi</option>
          <option value="Vaishali">Vaishali</option>
          <option value="Akshardham">Akshardham</option>
          <option value="Mayur Vihar Phase 1">Mayur Vihar Phase 1</option>
          <option value="Mayur Vihar Ext.">Mayur Vihar Ext.</option>
          <option value="New Ashok Nagar">New Ashok Nagar</option>
          <option value="Noida Sector 15">Noida Sector 15</option>
          <option value="Noida Sector 16">Noida Sector 16</option>
          <option value="Noida Sector 18">Noida Sector 18</option>
          <option value="Botanical Garden">Botanical Garden</option>
          <option value="Golf Course">Golf Course</option>
          <option value="Noida City Centre">Noida City Centre</option>
          <option value="Noida Sector 34">Noida Sector 34</option>
          <option value="Noida Sector 52">Noida Sector 52</option>
          <option value="Noida Sector 61">Noida Sector 61</option>
          <option value="Noida Sector 59">Noida Sector 59</option>
          <option value="Noida Sector 62">Noida Sector 62</option>
          <option value="Noida Electronic City">Noida Electronic City</option>

          {/* Add more cities as needed */}
        </select>
      </div>
      <div className="form-group">
        {/* <label htmlFor="destination">Destination City:</label> */}
        <select
          id="select"
          className="form-control"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          required
        >
          <option value="">Select Destination City</option>
          <option value="Azadpur">Azadpur</option>
          <option value="Shalimar Bagh">Shalimar Bagh</option>
          <option value="Netaji Subhash Place">Netaji Subhash Place</option>
          <option value="Shakurpur">Shakurpur</option>
          <option value="Punjabi Bagh West">Punjabi Bagh West</option>
          <option value="ESI Hospital">ESI Hospital</option>
          <option value="Rajouri Garden">Rajouri Garden</option>
          <option value="Mayapuri">Mayapuri</option>
          <option value="Nariana Vihar">Nariana Vihar</option>
          <option value="Delhi cantt">Delhi cantt</option>
          <option value="Durgabai Deshmukh South Campus">
            Durgabai Deshmukh South Campus
          </option>
          <option value="Sir Vishweshwaraiah Moti Bagh">
            Sir Vishweshwaraiah Moti Bagh
          </option>
          <option value="Bhikaji Cama Place">Bhikaji Cama Place</option>
          <option value="Sarojini Nagar">Sarojini Nagar</option>
          <option value="INA">INA</option>
          <option value="South Extension">South Extension</option>
          <option value="Lajpat Nagar">Lajpat Nagar</option>
          <option value="Vinoba Puri">Vinoba Puri</option>
          <option value="Ashram">Ashram</option>
          <option value="Hazrat Nizamuddin">Hazrat Nizamuddin</option>
          <option value="Mayur Vihar Pocket">Mayur Vihar Pocket</option>
          <option value="Trilokpuri Sanjay Lake">Trilokpuri Sanjay Lake</option>
          <option value="East Vinod Nagar - Mayur Vihar-||">
            East Vinod Nagar - Mayur Vihar-||
          </option>
          <option value="Mandawali -West vinod Nagar">
            Mandawali -West vinod Nagar
          </option>
          <option value="IP Extension">IP Extension</option>
          <option value="Anand Vihar ISBT">Anand Vihar ISBT</option>
          <option value="Kardarduma">Kardarduma</option>
          <option value="Karkarduma Court">Karkarduma Court</option>
          <option value="Krishna Nagar">Krishna Nagar</option>
          <option value="East Azad Nagar">East Azad Nagar</option>
          <option value="Welcome">Welcome</option>
          <option value="Jaffrabad">Jaffrabad</option>
          <option value="Maujpur -Babarpur">Maujpur -Babarpur</option>
          <option value="Gokulpuri">Gokulpuri</option>
          <option value="Johri Enclave">Johri Enclave</option>
          <option value="Shiv Vihar">Shiv Vihar</option>
          <option value="Botanical Garden">Botanical Garden</option>
          <option value="Okhla Bird Sanctuary">Okhla Bird Sanctuary</option>
          <option value="Kalindi Kunj">Kalindi Kunj</option>
          <option value="Jasola Vihar Shaheen Bagh">
            Jasola Vihar Shaheen Bagh
          </option>
          <option value="Okhla Vihar">Okhla Vihar</option>
          <option value="Jamia Millia Islamia">Jamia Millia Islamia</option>
          <option value="Sukhdev Vihar">Sukhdev Vihar</option>
          <option value="Okhla NSIC">Okhla NSIC</option>
          <option value="Kalkaji Mandir">Kalkaji Mandir</option>
          <option value="Nehru Enclave">Nehru Enclave</option>
          <option value="Greater Kailash">Greater Kailash</option>
          <option value="Chirag Delhi">Chirag Delhi</option>
          <option value="Panchsheel Park">Panchsheel Park</option>
          <option value="Hauz Khas">Hauz Khas</option>
          <option value="IIT Delhi">IIT Delhi</option>
          <option value="Kashmere Gate">Kashmere Gate</option>
          <option value="Lal Quila">Lal Quila</option>
          <option value="Jama Masjid">Jama Masjid</option>
          <option value="Delhi Gate">Delhi Gate</option>
          <option value="ITO">ITO</option>
          <option value="Mandi House">Mandi House</option>
          <option value="Janpath">Janpath</option>
          <option value="Central Secretariat">Central Secretariat</option>
          <option value="Khan Market">Khan Market</option>
          <option value="JLN Stadium">JLN Stadium</option>
          <option value="Jangpura">Jangpura</option>
          <option value="Moolchand">Moolchand</option>
          <option value="Kailash Colony">Kailash Colony</option>
          <option value="Nehru Place">Nehru Place</option>
          <option value="Govind Puri">Govind Puri</option>
          <option value="Okhla">Okhla</option>
          <option value="Jasola Apollo">Jasola Apollo</option>
          <option value="Sarita Vihar">Sarita Vihar</option>
          <option value="Mohan Estate">Mohan Estate</option>
          <option value="Tughlakabad">Tughlakabad</option>
          <option value="Badarpur">Badarpur</option>
          <option value="Sarai">Sarai</option>
          <option value="NHPC Chowk">NHPC Chowk</option>
          <option value="Mewala Maharajpur">Mewala Maharajpur</option>
          <option value="Sector 28">Sector 28</option>
          <option value="Badkal Mor">Badkal Mor</option>
          <option value="Old Faridabad">Old Faridabad</option>
          <option value="Neelam Chowk Ajronda">Neelam Chowk Ajronda</option>
          <option value="Bata Chowk">Bata Chowk</option>
          <option value="Escorts Mujesar">Escorts Mujesar</option>
          <option value="New Delhi">New Delhi</option>
          <option value="Shivaji Stadium">Shivaji Stadium</option>
          <option value="Dhaula Kuan">Dhaula Kuan</option>
          <option value="Delhi Aerocity">Delhi Aerocity</option>
          <option value="IGI Airport">IGI Airport</option>
          <option value="Dwarka Sector 21">Dwarka Sector 21</option>
          <option value="Rithala">Rithala</option>
          <option value="Rohini West">Rohini West</option>
          <option value="Rohini East">Rohini East</option>
          <option value="Pitam Pura">Pitam Pura</option>
          <option value="Kohat Enclave">Kohat Enclave</option>
          <option value="Netaji Subhash Place">Netaji Subhash Place</option>
          <option value="Keshav Puram">Keshav Puram</option>
          <option value="Kanhaiya Nagar">Kanhaiya Nagar</option>
          <option value="Inderlok">Inderlok</option>
          <option value="Shastri Nagar">Shastri Nagar</option>
          <option value="Pratap Nagar">Pratap Nagar</option>
          <option value="Pul Bangash">Pul Bangash</option>
          <option value="Tis Hazari">Tis Hazari</option>

          <option value="Shastri Park">Shastri Park</option>
          <option value="Seelampur">Seelampur</option>
          <option value="Welcome">Welcome</option>
          <option value="Shahdara">Shahdara</option>
          <option value="Mansarovar Park">Mansarovar Park</option>
          <option value="Jhilmil">Jhilmil</option>
          <option value="Dilshad Garden">Dilshad Garden</option>
          <option value="Samaypur Badli">Samaypur Badli</option>
          <option value="Rohini Sector 18-19">Rohini Sector 18-19</option>
          <option value="Haiderpur Badli Mor">Haiderpur Badli Mor</option>
          <option value="Jahangirpuri">Jahangirpuri</option>
          <option value="Adarsh Nagar">Adarsh Nagar</option>

          <option value="Model Town">Model Town</option>
          <option value="GTB Nagar">GTB Nagar</option>
          <option value="Vishwa Vidyalaya">Vishwa Vidyalaya</option>
          <option value="Vidhan Sabha">Vidhan Sabha</option>
          <option value="Civil Lines">Civil Lines</option>

          <option value="Chandni Chowk">Chandni Chowk</option>
          <option value="Chawri Bazar">Chawri Bazar</option>
          <option value="New Delhi">New Delhi</option>
          <option value="Rajiv Chowk">Rajiv Chowk</option>
          <option value="Patel Chowk">Patel Chowk</option>
          <option value="Central Secretariat">Central Secretariat</option>
          <option value="Udyog Bhawan">Udyog Bhawan</option>
          <option value="Udyog Bhawan">Udyog Bhawan</option>
          <option value="Race Course">Race Course</option>
          <option value="Jor Bagh">Jor Bagh</option>
          <option value="INA">INA</option>
          <option value="AIIMS">AIIMS</option>
          <option value="Green Park">Green Park</option>
          <option value="Hauz Khas">Hauz Khas</option>
          <option value="Malviya Nagar">Malviya Nagar</option>
          <option value="Saket">Saket</option>
          <option value="Qutub Minar">Qutub Minar</option>
          <option value="Chhatarpur">Chhatarpur</option>
          <option value="Sultanpur">Sultanpur</option>
          <option value="Ghitorni">Ghitorni</option>
          <option value="Arjan Garh">Arjan Garh</option>
          <option value="Guru Dronacharya">Guru Dronacharya</option>
          <option value="Sikandarpur">Sikandarpur</option>
          <option value="MG Road">MG Road</option>
          <option value="IFFCO Chowk">IFFCO Chowk</option>
          <option value="Dwarka Sector 21">Dwarka Sector 21</option>
          <option value="Dwarka Sector 8">Dwarka Sector 8</option>
          <option value="Dwarka Sector 9">Dwarka Sector 9</option>
          <option value="Dwarka Sector 10">Dwarka Sector 10</option>
          <option value="Dwarka Sector 11">Dwarka Sector 11</option>
          <option value="Dwarka Sector 12">Dwarka Sector 12</option>
          <option value="Dwarka Sector 13">Dwarka Sector 13</option>
          <option value="Dwarka Sector 14">Dwarka Sector 14</option>
          <option value="Dwarka">Dwarka</option>
          <option value="Dwarka Mor">Dwarka Mor</option>
          <option value="Nawada">Nawada</option>
          <option value="Uttam Nagar West">Uttam Nagar West</option>
          <option value="Uttam Nagar East">Uttam Nagar East</option>
          <option value="Janakpuri West">Janakpuri West</option>
          <option value="Janakpuri East">Janakpuri East</option>
          <option value="Tilak Nagar">Tilak Nagar</option>
          <option value="Subhash Nagar">Subhash Nagar</option>
          <option value="Tagore Garden">Tagore Garden</option>
          <option value="Rajouri Garden">Rajouri Garden</option>
          <option value="Ramesh Nagar">Ramesh Nagar</option>
          <option value="Moti Nagar">Moti Nagar</option>
          <option value="Kirti Nagar">Kirti Nagar</option>
          <option value="Shadipur">Shadipur</option>
          <option value="Patel Nagar">Patel Nagar</option>
          <option value="Rajendra Place">Rajendra Place</option>
          <option value="Karol Bagh">Karol Bagh</option>
          <option value="Jhandewalan">Jhandewalan</option>
          <option value="RK Ashram Marg">RK Ashram Marg</option>
          <option value="Rajiv Chowk">Rajiv Chowk</option>
          <option value="Barakhamba Road">Barakhamba Road</option>
          <option value="Mandi House">Mandi House</option>
          <option value="Pragati Maidan">Pragati Maidan</option>
          <option value="Indraprastha">Indraprastha</option>
          <option value="Yamuna Bank">Yamuna Bank</option>
          <option value="Laxmi Nagar">Laxmi Nagar</option>
          <option value="Nirman Vihar">Nirman Vihar</option>
          <option value="Preet Vihar">Preet Vihar</option>
          <option value="Karkarduma">Karkarduma</option>
          <option value="Anand Vihar">Anand Vihar</option>
          <option value="Kaushambi">Kaushambi</option>
          <option value="Vaishali">Vaishali</option>
          <option value="Akshardham">Akshardham</option>
          <option value="Mayur Vihar Phase 1">Mayur Vihar Phase 1</option>
          <option value="Mayur Vihar Ext.">Mayur Vihar Ext.</option>
          <option value="New Ashok Nagar">New Ashok Nagar</option>
          <option value="Noida Sector 15">Noida Sector 15</option>
          <option value="Noida Sector 16">Noida Sector 16</option>
          <option value="Noida Sector 18">Noida Sector 18</option>
          <option value="Botanical Garden">Botanical Garden</option>
          <option value="Golf Course">Golf Course</option>
          <option value="Noida City Centre">Noida City Centre</option>
          <option value="Noida Sector 34">Noida Sector 34</option>
          <option value="Noida Sector 52">Noida Sector 52</option>
          <option value="Noida Sector 61">Noida Sector 61</option>
          <option value="Noida Sector 59">Noida Sector 59</option>
          <option value="Noida Sector 62">Noida Sector 62</option>
          <option value="Noida Electronic City">Noida Electronic City</option>

          {/* Add more cities as needed */}
        </select>
      </div>
      <button type="submit" className="btn">
        Find Shortest Path
      </button>
    </form>
  );
};

export default Form;

const graph = {
  "Majlis Park": [{ node: "Azadpur", weight: 2.0 }],
  Azadpur: [
    { node: "Majlis Park", weight: 2.0 },
    { node: "Shalimar Bagh", weight: 2.0 },
    { node: "Adarsh Nagar", weight: 1.3 },
    { node: "Model Town", weight: 1.3 },
  ],
  "Shalimar Bagh": [
    { node: "Azadpur", weight: 2.0 },
    { node: "Netaji Subhash Place", weight: 1.7 },
  ],
  "Netaji Subhash Place": [
    { node: "Shalimar Bagh", weight: 1.7 },
    { node: "Shakurpur", weight: 1.5 },
  ],
  Shakurpur: [
    { node: "Netaji Subhash Place", weight: 1.7 },
    { node: "Punjabi Bagh West", weight: 1.4 },
  ],
  "Punjabi Bagh West": [
    { node: "Shakurpur", weight: 1.4 },
    { node: "ESI Hospital", weight: 1.5 },
  ],
  "ESI Hospital": [
    { node: "Punjabi Bagh West", weight: 1.5 },
    { node: "Rajouri Garden", weight: 1.3 },
  ],
  "Rajouri Garden": [
    { node: "ESI Hospital", weight: 1.3 },
    { node: "Mayapuri", weight: 1.3 },
  ],
  Mayapuri: [
    { node: "Rajouri Garden", weight: 1.3 },
    { node: "Naraina Vihar", weight: 1.2 },
  ],
  "Naraina Vihar": [
    { node: "Delhi cantt", weight: 1.1 },
    { node: "Mayapuri", weight: 1.1 },
  ],
  "Delhi cantt": [
    { node: "Naraina Vihar", weight: 1.1 },
    { node: "Durgabai Deshmukh South Campus", weight: 1.1 },
  ],
  "Durgabai Deshmukh South Campus": [
    { node: "Sir Vishweshwaraiah Moti Bagh", weight: 1.0 },
    { node: "Delhi cantt", weight: 1.0 },
  ],
  "Sir Vishweshwaraiah Moti Bagh": [
    { node: "Bhikaji Cama Place", weight: 1.0 },
    { node: "Durgabai Deshmukh South Campus", weight: 1.0 },
  ],
  "Bhikaji Cama Place": [
    { node: "Sarojini Nagar", weight: 1.0 },
    { node: "Sir Vishweshwaraiah Moti Bagh", weight: 1.0 },
  ],
  "Sarojini Nagar": [
    { node: "INA", weight: 1.0 },
    { node: "Bhikaji Cama Place", weight: 1.0 },
  ],
  INA: [
    { node: "South Extension", weight: 1.0 },
    { node: "Sarojini Nagar", weight: 1.0 },
  ],
  "South Extension": [
    { node: "Lajpat Nagar", weight: 1.0 },
    { node: "INA", weight: 1.0 },
  ],
  "Lajpat Nagar": [
    { node: "Vinoba Puri", weight: 1.0 },
    { node: "South Extension", weight: 1.0 },
    { node: "Jangpura", weight: 1.5 },
    { node: "Moolchand", weight: 1.1 },
  ],
  "Vinoba Puri": [
    { node: "Ashram", weight: 1.0 },
    { node: "Lajpat Nagar", weight: 1.0 },
  ],
  Ashram: [
    { node: "Vinoba Puri", weight: 1.0 },
    { node: "Hazrat Nizamuddin", weight: 1.0 },
  ],
  "Hazrat Nizamuddin": [
    { node: "Mayur Vihar Pocket", weight: 1.0 },
    { node: "Ashram", weight: 1.0 },
  ],
  "Mayur Vihar Pocket": [
    { node: "Trilokpuri Sanjay Lake", weight: 1.0 },
    { node: "Hazrat Nizamuddin", weight: 1.0 },
  ],
  "Trilokpuri Sanjay Lake": [
    { node: "East Vinod Nagar - Mayur Vihar-||", weight: 1.0 },
    { node: "Mayur Vihar Pocket", weight: 1.0 },
  ],
  "East Vinod Nagar - Mayur Vihar-||": [
    { node: "Mandawali -West vinod Nagar", weight: 1.0 },
    { node: "Trilokpuri Sanjay Lake", weight: 1.0 },
  ],
  "Mandawali -West vinod Nagar": [
    { node: "IP Extension", weight: 1.0 },
    { node: "East Vinod Nagar - Mayur Vihar-||", weight: 1.0 },
  ],
  "IP Extension": [
    { node: "Anand Vihar ISBT", weight: 1.0 },
    { node: "Mandawali -West vinod Nagar", weight: 1.0 },
  ],
  "Anand Vihar ISBT": [
    { node: "Karkarduma", weight: 1.0 },
    { node: "IP Extension", weight: 1.0 },
  ],
  Kardarduma: [
    { node: "Karkarduma Court", weight: 1.0 },
    { node: "Anand Vihar ISBT", weight: 1.0 },
  ],
  "Karkarduma Court": [
    { node: "Krishna Nagar", weight: 1.0 },
    { node: "Karkarduma", weight: 1.0 },
  ],
  "Krishna Nagar": [
    { node: "East Azad Nagar", weight: 1.0 },
    { node: "Karkarduma Court", weight: 1.0 },
  ],
  "East Azad Nagar": [
    { node: "Welcome", weight: 1.0 },
    { node: "Krishna Nagar", weight: 1.0 },
  ],
  Welcome: [
    { node: "Jaffrabad", weight: 1.0 },
    { node: "East Azad Nagar", weight: 1.0 },
  ],
  Jaffrabad: [
    { node: "Maujpur -Babarpur", weight: 1.0 },
    { node: "Welcome", weight: 1.0 },
  ],
  "Maujpur -Babarpur": [
    { node: "Gokulpuri", weight: 1.0 },
    { node: "Jaffrabad", weight: 1.0 },
  ],
  Gokulpuri: [
    { node: "Maujpur -Babarpur", weight: 1.0 },
    { node: "Johri Enclave", weight: 1.0 },
  ],
  "Johri Enclave": [
    { node: "Shiv Vihar", weight: 1.0 },
    { node: "Gokulpuri", weight: 1.0 },
  ],
  "Shiv Vihar": [{ node: "Johri Enclave", weight: 1.0 }],
  "Botanical Garden": [{ node: "Okhla Bird Sanctuary", weight: 1.5 }],
  "Okhla Bird Sanctuary": [
    { node: "Botanical Garden", weight: 1.5 },
    { node: "Kalindi Kunj", weight: 2.0 },
  ],
  "Kalindi Kunj": [
    { node: "Okhla Bird Sanctuary", weight: 2.0 },
    { node: "Jasola Vihar Shaheen Bagh", weight: 1.8 },
  ],
  "Jasola Vihar Shaheen Bagh": [
    { node: "Kalindi Kunj", weight: 1.8 },
    { node: "Okhla Vihar", weight: 1.6 },
  ],
  "Okhla Vihar": [
    { node: "Jasola Vihar Shaheen Bagh", weight: 1.6 },
    { node: "Jamia Millia Islamia", weight: 1.5 },
  ],
  "Jamia Millia Islamia": [
    { node: "Okhla Vihar", weight: 1.5 },
    { node: "Sukhdev Vihar", weight: 1.3 },
  ],
  "Sukhdev Vihar": [
    { node: "Jamia Millia Islamia", weight: 1.3 },
    { node: "Okhla NSIC", weight: 1.3 },
  ],
  "Okhla NSIC": [
    { node: "Sukhdev Vihar", weight: 1.3 },
    { node: "Kalkaji Mandir", weight: 1.6 },
  ],
  "Kalkaji Mandir": [
    { node: "Okhla NSIC", weight: 1.6 },
    { node: "Nehru Enclave", weight: 1.1 },
  ],
  "Nehru Enclave": [
    { node: "Kalkaji Mandir", weight: 1.1 },
    { node: "Greater Kailash", weight: 1.3 },
  ],
  "Greater Kailash": [
    { node: "Nehru Enclave", weight: 1.3 },
    { node: "Chirag Delhi", weight: 1.3 },
  ],
  "Chirag Delhi": [
    { node: "Greater Kailash", weight: 1.3 },
    { node: "Panchsheel Park", weight: 1.3 },
  ],
  "Panchsheel Park": [
    { node: "Chirag Delhi", weight: 1.3 },
    { node: "Hauz Khas", weight: 1.3 },
  ],
  "Hauz Khas": [
    { node: "Panchsheel Park", weight: 1.3 },
    { node: "IIT Delhi", weight: 1.0 },
  ],
  "IIT Delhi": [
    { node: "Hauz Khas", weight: 1.0 },
    { node: "INA", weight: 1.9 },
  ],

  "Lal Quila": [
    { node: "Kashmere Gate", weight: 2.0 },
    { node: "Jama Masjid", weight: 0.5 },
  ],
  "Jama Masjid": [
    { node: "Lal Quila", weight: 0.5 },
    { node: "Delhi Gate", weight: 1.0 },
  ],
  "Delhi Gate": [
    { node: "Jama Masjid", weight: 1.0 },
    { node: "ITO", weight: 1.2 },
  ],
  ITO: [
    { node: "Delhi Gate", weight: 1.2 },
    { node: "Mandi House", weight: 1.1 },
  ],
  "Mandi House": [
    { node: "ITO", weight: 1.1 },
    { node: "Janpath", weight: 0.9 },
  ],
  Janpath: [
    { node: "Mandi House", weight: 0.9 },
    { node: "Central Secretariat", weight: 0.7 },
  ],
  "Central Secretariat": [
    { node: "Janpath", weight: 0.7 },
    { node: "Khan Market", weight: 1.1 },
    { node: "Kashmere Gate", weight: 6.7 },
  ],
  "Khan Market": [
    { node: "Central Secretariat", weight: 1.1 },
    { node: "JLN Stadium", weight: 1.4 },
  ],
  "JLN Stadium": [
    { node: "Khan Market", weight: 1.4 },
    { node: "Jangpura", weight: 1.1 },
  ],
  Jangpura: [
    { node: "JLN Stadium", weight: 1.1 },
    { node: "Lajpat Nagar", weight: 1.5 },
  ],

  Moolchand: [
    { node: "Lajpat Nagar", weight: 1.1 },
    { node: "Kailash Colony", weight: 1.2 },
  ],
  "Kailash Colony": [
    { node: "Moolchand", weight: 1.2 },
    { node: "Nehru Place", weight: 1.7 },
  ],
  "Nehru Place": [
    { node: "Kailash Colony", weight: 1.7 },
    { node: "Kalkaji Mandir", weight: 1.0 },
  ],
  "Kalkaji Mandir": [
    { node: "Nehru Place", weight: 1.0 },
    { node: "Govind Puri", weight: 1.0 },
  ],
  "Govind Puri": [
    { node: "Kalkaji Mandir", weight: 1.0 },
    { node: "Okhla", weight: 1.1 },
  ],
  Okhla: [
    { node: "Govind Puri", weight: 1.1 },
    { node: "Jasola Apollo", weight: 1.3 },
  ],
  "Jasola Apollo": [
    { node: "Okhla", weight: 1.3 },
    { node: "Sarita Vihar", weight: 1.2 },
  ],
  "Sarita Vihar": [
    { node: "Jasola Apollo", weight: 1.2 },
    { node: "Mohan Estate", weight: 1.6 },
  ],
  "Mohan Estate": [
    { node: "Sarita Vihar", weight: 1.6 },
    { node: "Tughlakabad", weight: 1.5 },
  ],
  Tughlakabad: [
    { node: "Mohan Estate", weight: 1.5 },
    { node: "Badarpur", weight: 2.1 },
  ],
  Badarpur: [
    { node: "Tughlakabad", weight: 2.1 },
    { node: "Sarai", weight: 1.6 },
  ],
  Sarai: [
    { node: "Badarpur", weight: 1.6 },
    { node: "NHPC Chowk", weight: 1.5 },
  ],
  "NHPC Chowk": [
    { node: "Sarai", weight: 1.5 },
    { node: "Mewala Maharajpur", weight: 1.4 },
  ],
  "Mewala Maharajpur": [
    { node: "NHPC Chowk", weight: 1.4 },
    { node: "Sector 28", weight: 1.4 },
  ],
  "Sector 28": [
    { node: "Mewala Maharajpur", weight: 1.4 },
    { node: "Badkal Mor", weight: 1.4 },
  ],
  "Badkal Mor": [
    { node: "Sector 28", weight: 1.4 },
    { node: "Old Faridabad", weight: 1.4 },
  ],
  "Old Faridabad": [
    { node: "Badkal Mor", weight: 1.4 },
    { node: "Neelam Chowk Ajronda", weight: 1.4 },
  ],
  "Neelam Chowk Ajronda": [
    { node: "Old Faridabad", weight: 1.4 },
    { node: "Bata Chowk", weight: 1.4 },
  ],
  "Bata Chowk": [
    { node: "Neelam Chowk Ajronda", weight: 1.4 },
    { node: "Escorts Mujesar", weight: 1.3 },
  ],
  "Escorts Mujesar": [{ node: "Bata Chowk", weight: 1.3 }],
  "New Delhi": [
    { node: "Shivaji Stadium", weight: 2.7 },
    { node: "Dhaula Kuan", weight: 7.7 },
  ],
  "Shivaji Stadium": [
    { node: "New Delhi", weight: 2.7 },
    { node: "Dhaula Kuan", weight: 6.6 },
  ],
  "Dhaula Kuan": [
    { node: "Shivaji Stadium", weight: 6.6 },
    { node: "Delhi Aerocity", weight: 6.5 },
  ],
  "Delhi Aerocity": [
    { node: "Dhaula Kuan", weight: 6.5 },
    { node: "IGI Airport", weight: 3.2 },
  ],
  "IGI Airport": [
    { node: "Delhi Aerocity", weight: 3.2 },
    { node: "Dwarka Sector 21", weight: 3.0 },
  ],
  "Dwarka Sector 21": [{ node: "IGI Airport", weight: 3.0 }],
  Rithala: [{ node: "Rohini West", weight: 1.9 }],
  "Rohini West": [
    { node: "Rithala", weight: 1.9 },
    { node: "Rohini East", weight: 1.0 },
  ],
  "Rohini East": [
    { node: "Rohini West", weight: 1.0 },
    { node: "Pitam Pura", weight: 1.5 },
  ],
  "Pitam Pura": [
    { node: "Rohini East", weight: 1.5 },
    { node: "Kohat Enclave", weight: 1.4 },
  ],
  "Kohat Enclave": [
    { node: "Pitam Pura", weight: 1.4 },
    { node: "Netaji Subhash Place", weight: 1.3 },
  ],
  "Netaji Subhash Place": [
    { node: "Kohat Enclave", weight: 1.3 },
    { node: "Keshav Puram", weight: 1.1 },
  ],
  "Keshav Puram": [
    { node: "Netaji Subhash Place", weight: 1.1 },
    { node: "Kanhaiya Nagar", weight: 1.0 },
  ],
  "Kanhaiya Nagar": [
    { node: "Keshav Puram", weight: 1.0 },
    { node: "Inderlok", weight: 1.7 },
  ],
  Inderlok: [
    { node: "Kanhaiya Nagar", weight: 1.7 },
    { node: "Shastri Nagar", weight: 1.2 },
  ],
  "Shastri Nagar": [
    { node: "Inderlok", weight: 1.2 },
    { node: "Pratap Nagar", weight: 1.3 },
  ],
  "Pratap Nagar": [
    { node: "Shastri Nagar", weight: 1.3 },
    { node: "Pul Bangash", weight: 1.0 },
  ],
  "Pul Bangash": [
    { node: "Pratap Nagar", weight: 1.0 },
    { node: "Tis Hazari", weight: 1.3 },
  ],
  "Tis Hazari": [
    { node: "Pul Bangash", weight: 1.3 },
    { node: "Kashmere Gate", weight: 1.0 },
  ],

  "Shastri Park": [
    { node: "Kashmere Gate", weight: 1.5 },
    { node: "Seelampur", weight: 1.3 },
  ],
  Seelampur: [
    { node: "Shastri Park", weight: 1.3 },
    { node: "Welcome", weight: 1.6 },
  ],
  Welcome: [
    { node: "Seelampur", weight: 1.6 },
    { node: "Shahdara", weight: 1.2 },
  ],
  Shahdara: [
    { node: "Welcome", weight: 1.2 },
    { node: "Mansarovar Park", weight: 1.0 },
  ],
  "Mansarovar Park": [
    { node: "Shahdara", weight: 1.0 },
    { node: "Jhilmil", weight: 1.3 },
  ],
  Jhilmil: [
    { node: "Mansarovar Park", weight: 1.3 },
    { node: "Dilshad Garden", weight: 1.0 },
  ],
  "Dilshad Garden": [{ node: "Jhilmil", weight: 1.0 }],
  "Samaypur Badli": [{ node: "Rohini Sector 18-19", weight: 1.5 }],
  "Rohini Sector 18-19": [
    { node: "Samaypur Badli", weight: 1.5 },
    { node: "Haiderpur Badli Mor", weight: 2.0 },
  ],
  "Haiderpur Badli Mor": [
    { node: "Rohini Sector 18-19", weight: 2.0 },
    { node: "Jahangirpuri", weight: 1.4 },
  ],
  Jahangirpuri: [
    { node: "Haiderpur Badli Mor", weight: 1.4 },
    { node: "Adarsh Nagar", weight: 1.0 },
  ],
  "Adarsh Nagar": [
    { node: "Jahangirpuri", weight: 1.0 },
    { node: "Azadpur", weight: 1.3 },
  ],

  "Model Town": [
    { node: "Azadpur", weight: 1.3 },
    { node: "GTB Nagar", weight: 1.4 },
  ],
  "GTB Nagar": [
    { node: "Model Town", weight: 1.4 },
    { node: "Vishwa Vidyalaya", weight: 1.2 },
  ],
  "Vishwa Vidyalaya": [
    { node: "GTB Nagar", weight: 1.2 },
    { node: "Vidhan Sabha", weight: 1.3 },
  ],
  "Vidhan Sabha": [
    { node: "Vishwa Vidyalaya", weight: 1.3 },
    { node: "Civil Lines", weight: 1.2 },
  ],
  "Civil Lines": [
    { node: "Vidhan Sabha", weight: 1.2 },
    { node: "Kashmere Gate", weight: 1.0 },
  ],
  "Kashmere Gate": [
    { node: "Civil Lines", weight: 1.0 },
    { node: "Chandni Chowk", weight: 1.6 },
    { node: "Lal Quila", weight: 3.2 },

    { node: "Tis Hazari", weight: 1.0 },
    { node: "Shastri Park", weight: 1.5 },
    { node: "Red Fort", weight: 1.3 },
  ],
  "Chandni Chowk": [
    { node: "Kashmere Gate", weight: 1.6 },
    { node: "Chawri Bazar", weight: 0.8 },
  ],
  "Chawri Bazar": [
    { node: "Chandni Chowk", weight: 0.8 },
    { node: "New Delhi", weight: 1.1 },
  ],
  "New Delhi": [
    { node: "Chawri Bazar", weight: 1.1 },
    { node: "Rajiv Chowk", weight: 1.6 },
  ],
  "Rajiv Chowk": [
    { node: "New Delhi", weight: 1.6 },
    { node: "Patel Chowk", weight: 1.3 },
    { node: "Barakhamba Road", weight: 0.9 },
  ],
  "Patel Chowk": [
    { node: "Rajiv Chowk", weight: 1.3 },
    { node: "Central Secretariat", weight: 2.3 },
  ],
  "Central Secretariat": [
    { node: "Patel Chowk", weight: 2.3 },
    { node: "Udyog Bhawan", weight: 1.2 },
    { node: "Janpath", weight: 1.1 },
    { node: "Khan Market", weight: 1.3 },
  ],
  "Udyog Bhawan": [
    { node: "Central Secretariat", weight: 1.2 },
    { node: "Race Course", weight: 1.3 },
  ],
  "Race Course": [
    { node: "Udyog Bhawan", weight: 1.3 },
    { node: "Jor Bagh", weight: 1.4 },
  ],
  "Jor Bagh": [
    { node: "Race Course", weight: 1.4 },
    { node: "INA", weight: 1.2 },
  ],
  INA: [
    { node: "Jor Bagh", weight: 1.2 },
    { node: "AIIMS", weight: 1.3 },
  ],
  AIIMS: [
    { node: "INA", weight: 1.3 },
    { node: "Green Park", weight: 1.6 },
  ],
  "Green Park": [
    { node: "AIIMS", weight: 1.6 },
    { node: "Hauz Khas", weight: 1.8 },
  ],
  "Hauz Khas": [
    { node: "Green Park", weight: 1.8 },
    { node: "Malviya Nagar", weight: 1.6 },
  ],
  "Malviya Nagar": [
    { node: "Hauz Khas", weight: 1.6 },
    { node: "Saket", weight: 1.8 },
  ],
  Saket: [
    { node: "Malviya Nagar", weight: 1.8 },
    { node: "Qutub Minar", weight: 2.0 },
  ],
  "Qutub Minar": [
    { node: "Saket", weight: 2.0 },
    { node: "Chhatarpur", weight: 1.3 },
  ],
  Chhatarpur: [
    { node: "Qutub Minar", weight: 1.3 },
    { node: "Sultanpur", weight: 1.4 },
  ],
  Sultanpur: [
    { node: "Chhatarpur", weight: 1.4 },
    { node: "Ghitorni", weight: 1.4 },
  ],
  Ghitorni: [
    { node: "Sultanpur", weight: 1.4 },
    { node: "Arjan Garh", weight: 1.5 },
  ],
  "Arjan Garh": [
    { node: "Ghitorni", weight: 1.5 },
    { node: "Guru Dronacharya", weight: 1.4 },
  ],
  "Guru Dronacharya": [
    { node: "Arjan Garh", weight: 1.4 },
    { node: "Sikandarpur", weight: 1.8 },
  ],
  Sikandarpur: [
    { node: "Guru Dronacharya", weight: 1.8 },
    { node: "MG Road", weight: 1.3 },
  ],
  "MG Road": [
    { node: "Sikandarpur", weight: 1.3 },
    { node: "IFFCO Chowk", weight: 1.6 },
  ],
  "IFFCO Chowk": [
    { node: "MG Road", weight: 1.6 },
    { node: "Huda City Centre", weight: 4.2 },
  ],
  "Dwarka Sector 21": [{ node: "Dwarka Sector 8", weight: 1.2 }],
  "Dwarka Sector 8": [
    { node: "Dwarka Sector 21", weight: 1.2 },
    { node: "Dwarka Sector 9", weight: 1.0 },
  ],
  "Dwarka Sector 9": [
    { node: "Dwarka Sector 8", weight: 1.0 },
    { node: "Dwarka Sector 10", weight: 1.1 },
  ],
  "Dwarka Sector 10": [
    { node: "Dwarka Sector 9", weight: 1.1 },
    { node: "Dwarka Sector 11", weight: 1.0 },
  ],
  "Dwarka Sector 11": [
    { node: "Dwarka Sector 10", weight: 1.0 },
    { node: "Dwarka Sector 12", weight: 1.3 },
  ],
  "Dwarka Sector 12": [
    { node: "Dwarka Sector 11", weight: 1.3 },
    { node: "Dwarka Sector 13", weight: 1.2 },
  ],
  "Dwarka Sector 13": [
    { node: "Dwarka Sector 12", weight: 1.2 },
    { node: "Dwarka Sector 14", weight: 1.1 },
  ],
  "Dwarka Sector 14": [
    { node: "Dwarka Sector 13", weight: 1.1 },
    { node: "Dwarka", weight: 1.0 },
  ],
  Dwarka: [
    { node: "Dwarka Sector 14", weight: 1.0 },
    { node: "Dwarka Mor", weight: 2.0 },
  ],
  "Dwarka Mor": [
    { node: "Dwarka", weight: 2.0 },
    { node: "Nawada", weight: 1.6 },
  ],
  Nawada: [
    { node: "Dwarka Mor", weight: 1.6 },
    { node: "Uttam Nagar West", weight: 1.3 },
  ],
  "Uttam Nagar West": [
    { node: "Nawada", weight: 1.3 },
    { node: "Uttam Nagar East", weight: 1.0 },
  ],
  "Uttam Nagar East": [
    { node: "Uttam Nagar West", weight: 1.0 },
    { node: "Janakpuri West", weight: 1.2 },
  ],
  "Janakpuri West": [
    { node: "Uttam Nagar East", weight: 1.2 },
    { node: "Janakpuri East", weight: 1.1 },
  ],
  "Janakpuri East": [
    { node: "Janakpuri West", weight: 1.1 },
    { node: "Tilak Nagar", weight: 1.4 },
  ],
  "Tilak Nagar": [
    { node: "Janakpuri East", weight: 1.4 },
    { node: "Subhash Nagar", weight: 1.2 },
  ],
  "Subhash Nagar": [
    { node: "Tilak Nagar", weight: 1.2 },
    { node: "Tagore Garden", weight: 1.1 },
  ],
  "Tagore Garden": [
    { node: "Subhash Nagar", weight: 1.1 },
    { node: "Rajouri Garden", weight: 1.0 },
  ],
  "Rajouri Garden": [
    { node: "Tagore Garden", weight: 1.0 },
    { node: "Ramesh Nagar", weight: 1.5 },
  ],
  "Ramesh Nagar": [
    { node: "Rajouri Garden", weight: 1.5 },
    { node: "Moti Nagar", weight: 1.1 },
  ],
  "Moti Nagar": [
    { node: "Ramesh Nagar", weight: 1.1 },
    { node: "Kirti Nagar", weight: 1.1 },
  ],
  "Kirti Nagar": [
    { node: "Moti Nagar", weight: 1.1 },
    { node: "Shadipur", weight: 1.1 },
  ],
  Shadipur: [
    { node: "Kirti Nagar", weight: 1.1 },
    { node: "Patel Nagar", weight: 1.2 },
  ],
  "Patel Nagar": [
    { node: "Shadipur", weight: 1.2 },
    { node: "Rajendra Place", weight: 1.0 },
  ],
  "Rajendra Place": [
    { node: "Patel Nagar", weight: 1.0 },
    { node: "Karol Bagh", weight: 1.4 },
  ],
  "Karol Bagh": [
    { node: "Rajendra Place", weight: 1.4 },
    { node: "Jhandewalan", weight: 1.0 },
  ],
  Jhandewalan: [
    { node: "Karol Bagh", weight: 1.0 },
    { node: "RK Ashram Marg", weight: 1.3 },
  ],
  "RK Ashram Marg": [
    { node: "Jhandewalan", weight: 1.3 },
    { node: "Rajiv Chowk", weight: 1.1 },
  ],
  "Rajiv Chowk": [
    { node: "RK Ashram Marg", weight: 1.1 },
    { node: "Barakhamba Road", weight: 0.8 },
    { node: "New Delhi", weight: 1.5 },
  ],
  "Barakhamba Road": [
    { node: "Rajiv Chowk", weight: 0.8 },
    { node: "Mandi House", weight: 1.0 },
  ],
  "Mandi House": [
    { node: "Barakhamba Road", weight: 1.0 },
    { node: "Pragati Maidan", weight: 1.3 },
    { node: "ITO", weight: 1.2 },
  ],
  "Pragati Maidan": [
    { node: "Mandi House", weight: 1.3 },
    { node: "Indraprastha", weight: 1.5 },
  ],
  Indraprastha: [
    { node: "Pragati Maidan", weight: 1.5 },
    { node: "Yamuna Bank", weight: 2.4 },
  ],
  "Yamuna Bank": [
    { node: "Indraprastha", weight: 2.4 },
    { node: "Laxmi Nagar", weight: 1.3 },
    { node: "Akshardham", weight: 2.7 },
  ],
  "Laxmi Nagar": [
    { node: "Yamuna Bank", weight: 1.3 },
    { node: "Nirman Vihar", weight: 1.2 },
  ],
  "Nirman Vihar": [
    { node: "Laxmi Nagar", weight: 1.2 },
    { node: "Preet Vihar", weight: 1.2 },
  ],
  "Preet Vihar": [
    { node: "Nirman Vihar", weight: 1.2 },
    { node: "Karkarduma", weight: 1.4 },
  ],
  Karkarduma: [
    { node: "Preet Vihar", weight: 1.4 },
    { node: "Anand Vihar", weight: 1.1 },
  ],
  "Anand Vihar": [
    { node: "Karkarduma", weight: 1.1 },
    { node: "Kaushambi", weight: 2.1 },
  ],
  Kaushambi: [
    { node: "Anand Vihar", weight: 2.1 },
    { node: "Vaishali", weight: 1.0 },
  ],
  Vaishali: [{ node: "Kaushambi", weight: 1.0 }],
  Akshardham: [
    { node: "Yamuna Bank", weight: 2.7 },
    { node: "Mayur Vihar Phase 1", weight: 1.7 },
  ],
  "Mayur Vihar Phase 1": [
    { node: "Akshardham", weight: 1.7 },
    { node: "Mayur Vihar Ext.", weight: 1.3 },
  ],
  "Mayur Vihar Ext.": [
    { node: "Mayur Vihar Phase 1", weight: 1.3 },
    { node: "New Ashok Nagar", weight: 1.1 },
  ],
  "New Ashok Nagar": [
    { node: "Mayur Vihar Ext.", weight: 1.1 },
    { node: "Noida Sector 15", weight: 1.2 },
  ],
  "Noida Sector 15": [
    { node: "New Ashok Nagar", weight: 1.2 },
    { node: "Noida Sector 16", weight: 1.1 },
  ],
  "Noida Sector 16": [
    { node: "Noida Sector 15", weight: 1.1 },
    { node: "Noida Sector 18", weight: 1.0 },
  ],
  "Noida Sector 18": [
    { node: "Noida Sector 16", weight: 1.0 },
    { node: "Botanical Garden", weight: 1.5 },
  ],
  "Botanical Garden": [
    { node: "Noida Sector 18", weight: 1.5 },
    { node: "Golf Course", weight: 0.9 },
  ],
  "Golf Course": [
    { node: "Botanical Garden", weight: 0.9 },
    { node: "Noida City Centre", weight: 1.2 },
  ],
  "Noida City Centre": [
    { node: "Golf Course", weight: 1.2 },
    { node: "Noida Sector 34", weight: 1.3 },
  ],
  "Noida Sector 34": [
    { node: "Noida City Centre", weight: 1.3 },
    { node: "Noida Sector 52", weight: 1.6 },
  ],
  "Noida Sector 52": [
    { node: "Noida Sector 34", weight: 1.6 },
    { node: "Noida Sector 61", weight: 1.2 },
  ],
  "Noida Sector 61": [
    { node: "Noida Sector 52", weight: 1.2 },
    { node: "Noida Sector 59", weight: 1.0 },
  ],
  "Noida Sector 59": [
    { node: "Noida Sector 61", weight: 1.0 },
    { node: "Noida Sector 62", weight: 1.0 },
  ],
  "Noida Sector 62": [
    { node: "Noida Sector 59", weight: 1.0 },
    { node: "Noida Electronic City", weight: 1.4 },
  ],
  "Noida Electronic City": [{ node: "Noida Sector 62", weight: 1.4 }],
};

module.exports = graph;

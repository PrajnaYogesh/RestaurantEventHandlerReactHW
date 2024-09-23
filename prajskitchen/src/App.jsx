import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import ItemCard from './components/ItemCard';

function App() {
  // user has LoggedIn or not
  // const [isLoggedIn,setIsLoggedIn]=useState(false);

  const [selectedItem,setSelectedItem] = useState([
    {
      name:"PANIPURI",
      description: "Savory snack with vegetables and tangy tamarind sauce.",
      price : "$8.99",
      image:"https://virasatindiancuisine.com/wp-content/uploads/2024/03/PANIPURI.png"
    },
    {
      name:"TANDOORI SHRIMP TIKKA ",
      description: "Tiger shrimps marinated in herbs and exotic spices and grilled.",
      price : "$16.99",
      image:"https://virasatindiancuisine.com/wp-content/uploads/2024/04/tandoori-shrimp-tikka.png "
    },
    ,
  {
    name:"GOA SPECIAL GOAN FISH/ SHRIMP CURRY ",
    description: "Tamarind paste, grated coconut, green chilies, onion and a melange of spices. ",
    price : "$16.99",
    image:"https://virasatindiancuisine.com/wp-content/uploads/2024/03/GOA-SPECIAL-GOAN-FISH-SHRIMP-CURRY.png "
  },
  ,
  {
    name:"SAMOSA",
    description: "Crispy pastry with savory potatoes, peas and spices.",
    price : "$4.99",
    image:"https://virasatindiancuisine.com/wp-content/uploads/2024/03/samosa.png "
  }
  ,
  {
    name:"CHICKEN 65",
    description: "Deep fried marinated boneless chicken, chef special 65 sauce and tossed with curry leaves & spices.",
    price : "$13.99",
    image:"https://virasatindiancuisine.com/wp-content/uploads/2024/04/shrimp-65.png"
  }
  ,
  {
    name:"STUFFED PARATHA PANEER/CHICKEN",
    description: "Dough stuffed with paneer/chicken.",
    price : "$4.99",
    image:"https://virasatindiancuisine.com/wp-content/uploads/2024/03/STUFFED-PARATHA-CHICKEN.png"
  }
  ])
const[user,setUser] = useState({
  name:"Guest",
  email:"",
  isLoggedIn:false
})


function logOutUser(){
setUser(()=>({
  name:"Guest",
  email: "",
  isLoggedIn:false
}))
}

function signInUser(){
  setUser(()=>({
    name:"Praj",
    email:"praj@gmail.com",
    isLoggedIn:true
  }))
}

const breakfast = [
  {
    name:"Masala Dosa",
    description: "Crisp and soft dosa spiced with red chutney and served with a potato dish.",
    price : "$11.99",
    image:"https://virasatindiancuisine.com/wp-content/uploads/2024/03/MYSORE-MASALA-DOSA.png"
  },
    {
    name:"English Breakfast",
    description: "Toasted bread with eggs,bacon and sausages",
    price : "$11.99",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV_l7Al0pOttTZSuyNBLPaiYzkYX-FNKUsnw&s"
  },
  {
    name:"SAMBAR IDLI",
    description: "Crisp and soft dosa spiced with red chutney and served with a potato dish.",
    price : "$11.99",
    image:"https://virasatindiancuisine.com/wp-content/uploads/2024/03/SAMBAR-IDLY.png"
  },
  {
    name:"MEDU VADA",
    description: "Rice flour, whole urad dal, curry leaves, green chili, deep frying.",
    price : "$6.99",
    image:"https://virasatindiancuisine.com/wp-content/uploads/2024/03/MENDU-VADA.png"
  },
  {
    name:"MIX VEG UTHAPPAM",
    description: "Pour thick dosa butter, top with onions, tomatoes, cilantro, cook until golden, serve hot with chutney.",
    price : "$11.99",
    image:"https://virasatindiancuisine.com/wp-content/uploads/2024/03/MIX-VEG-UTHAPPAM.png"
  },
  {
    name:"MUTTON KEEMA DOSA",
    description: "Savory crepe made from a fermented batter of ground black gram and rice with kheema",
    price : "$11.99",
    image:"https://virasatindiancuisine.com/wp-content/uploads/2024/04/MUTTON-KHEEMA-DOSA.png"
  },
  {
    name:"PURI/ BHATURA/PAV",
    description: "Fried puff/bread served with a potato dish.",
    price : "$9.99",
    image:"https://virasatindiancuisine.com/wp-content/uploads/2024/03/PURI.png"
  },
  {
    name:"Sandwich",
    description: "cheese/chicken/vegetables filling between slices of bread",
    price : "$9.99",
    image:"data:image/jpeg;base64,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"
  }
]


const lunch= [
  {
    name:"VEG BIRYANI",
    description: "Basmati rice, potatoes, green peas, rose water, french beans.",
    price : "$11.99",
    image:"https://virasatindiancuisine.com/wp-content/uploads/2024/03/VEG-BIRYANI.png"
  },
  {
    name:"HYDERABADI CHICKEN DUM BIRYANI",
    description: "Chicken and rice with onions, yogurt, lemon, green chili paste.",
    price : "$13.99",
    image:"https://virasatindiancuisine.com/wp-content/uploads/2024/03/HYDERABAD-CHICKEN-DUM-BIRYANI.png"
  },
  {
    name:"YOGURT RICE ",
    description: "Steamed rice with yogurt, ginger, green chili and curry leaves.",
    price : "$8.99",
    image:"https://virasatindiancuisine.com/wp-content/uploads/2024/03/YOGURT-RICE.png "
  },
  {
    name:"MUTTON DUM BIRYANI ",
    description: "Mutton and rice with onions, yogurt, lemon, green chili paste. ",
    price : "$17.99",
    image:"https://virasatindiancuisine.com/wp-content/uploads/2024/03/MUTTON-DUM-BIRYANI.png "
  },
  {
    name:" PANEER BIRYANI",
    description: "Panner and rice with onions, yogurt, lemon, green chili paste. ",
    price : "$13.99",
    image:" https://virasatindiancuisine.com/wp-content/uploads/2024/03/PANEER-BIRYANI.png"
  },
  {
    name:"VEG SCHEZWAN FRIED RICE ",
    description: "Rice stir fried with vegetables and schezwan sauce. ",
    price : "$11.99",
    image:"https://virasatindiancuisine.com/wp-content/uploads/2024/03/VEG-SCHEZWAN-FRIED-RICE.png "
  },
  {
    name:"SCHEZWAN NOODLES ",
    description: "Boiled noodles stir fried with schezwan sauce, onions, peppers, carrots and cabbages. ",
    price : "$11.99",
    image:"https://virasatindiancuisine.com/wp-content/uploads/2024/03/SCHEZWAN-NOODLES.png "
  },
  {
    name:"MOMO STEAMED ",
    description: "Plain flour-based veggie steamed dumplings served with sour, spicy and tangy Sauce. ",
    price : "$11.99",
    image:"https://virasatindiancuisine.com/wp-content/uploads/2024/03/VEG-MOMO-STEAMED-MALAYI-TANDOORI.png "
  },
  {
    name:" MANCHURIAN ",
    description: "Fried veggie balls in a spicy manchurian sauce. ",
    price : "$11.99",
    image:" https://virasatindiancuisine.com/wp-content/uploads/2024/03/VEG-MANCHURIAN.png"
  },
  {
    name:"CHINESE FUSION BHEL ",
    description: "Crispy noodles with fresh vegetables and sauces. ",
    price : "$12.99",
    image:"https://virasatindiancuisine.com/wp-content/uploads/2024/03/CHINESS-FUSION-BHEL.png "
  }
]

const dinner = [
  {
    name:"CHICKEN VINDALOO CURRY ",
    description: "Chicken, curry leaves, star anise, poppy seeds, green, red chili. ",
    price : "$14.99",
    image:"https://virasatindiancuisine.com/wp-content/uploads/2024/03/CHICKEN-VINDALOO-CURRY.png "
  },
  {
    name:"CHICKEN SIZZLER ",
    description: " Chicken manchurian with noodles cooked in a sauce and served on a hot metal plate with sizzling sound.",
    price : "$19.99",
    image:"https://virasatindiancuisine.com/wp-content/uploads/2024/03/CHICKEN-SIZZLER.png"
  },
  {
    name:"BUTTER NAAN ",
    description: "Naan is a leavened, oven-baked or tawa-fried flatbread with chilli. ",
    price : "$3.99",
    image:"https://virasatindiancuisine.com/wp-content/uploads/2024/03/BULLET-NAAN.png "
  },
  {
    name:"FISH MASALA CURRY ",
    description: "A rustic Indian sauce made with onions and tomatoes, along with aromatics such as ginger, garlic. ",
    price : "$15.99",
    image:"https://virasatindiancuisine.com/wp-content/uploads/2024/03/FISH-SHRIMP-MASALA-CURRY.png "
  },
  {
    name:"CHICKEN MANCHOW ",
    description: "Chinese soup that's savory, spicy and tangy with chicken, veggies and crispy noodles. ",
    price : "$7.99",
    image:"https://virasatindiancuisine.com/wp-content/uploads/2024/03/CHICKEN-MANCHOW.png "
  },
 
  {
    name:" SHRIMP MASALA CURRY",
    description: "A rustic Indian sauce made with onions and tomatoes, along with aromatics such as ginger, garlic. ",
    price : "$16.99",
    image:"https://virasatindiancuisine.com/wp-content/uploads/2024/04/SHRIMP-MASALA-CURRY.png "
  },
  {
    name:" GARLIC NAAN",
    description: "Naan is a leavened, oven-baked or tawa-fried flatbread with garlic and butter. ",
    price : "$3.99",
    image:"https://virasatindiancuisine.com/wp-content/uploads/2024/03/GARLIC-NAAN.png "
  },
  {
    name:"ROASTED PAPAD ",
    description: "Papad roasted and topped with garnish",
    price : "$1.99",
    image:"https://virasatindiancuisine.com/wp-content/uploads/2024/03/ROSTED-PAPAD.png "
  }
];


  return (
    <div className='appContainer'>
<Navbar currentUser={user}  logOutUser={logOutUser} signInUser={signInUser} setSelectedItem={setSelectedItem} breakfast={breakfast} 
  lunch={lunch} 
  dinner={dinner}/>
  <div className="itemcardcontainer">
<ItemCard selectedItem={selectedItem}/>
</div>
   
    </div>
  )
}

export default App

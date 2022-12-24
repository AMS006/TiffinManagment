import React,{useState} from 'react'

function MealDetail() {
  const [mealData,setMealData] = useState({
    name:"Indian Veg Thali",
    price:"110",
    image:"https://ik.imagekit.io/curefoods/image/packs/eat/IND_VEG01/14.jpg",
    isVeg:"true",
    menu:[
      {
        day:"Sunday",
        img:"https://ik.imagekit.io/curefoods/image/singles/eat/meals/EAT6667/primary/2_1_t.jpg",
        meal:"Lasooni Methi Paneer, Bhindi, Paratha Thali",
        description:"A flavourful North Indian protein thali! Garlicky methi paneer, delicious bhindi with chana and whole wheat parathas is all you need to appease your hunger. Served with salad & pickle. Allergen information: Gluten, seeds, dairy"
        
      },
      {
        day:"Monday",
        img:"https://ik.imagekit.io/curefoods/image/singles/eat/meals/EAT6853/primary/1_1_t.jpg",
        meal:"Yellow Dal Tadka, Soya Masala Sabzi, Pulao Thali",
        description:"An ever-loved combination of yellow dal tadka, soya masala sabzi and ghee-ful jeera pulao. Allergen information: Soy"
      },
      {
        day:"Tuesday",
        img:"https://ik.imagekit.io/curefoods/image/singles/eat/meals/EAT6836/primary/3_1_t.jpg",
        meal:"Ghar ke Rajma, Mix Veg Poriyal, Roti Thali",
        description:"Feel homely with simple ghar ke rajma, mix veg poriyal and soft warm rotis. Allergen information: Gluten"
      },
      {
        day:"Wednesday",
        img:"https://ik.imagekit.io/curefoods/image/singles/eat/meals/EAT6844/primary/1_1_t.jpg",
        meal:"Dal Makhani, Butter Paneer, Pulao Thali",
        description:"A buttery rice thali delight! Creamy dal makhani, butter paneer and ghee-ful jeera pulao. Allergen information : Dairy, vinegar"
      },
      {
        day:"Thursday",
        img:"https://ik.imagekit.io/curefoods/image/singles/eat/meals/HPS139/primary/3_1_t.jpg",
        meal:"Palak Paneer With Thepla",
        description:"One of our best dishes, palak paneer, containing soft paneer cooked in the spinach gravy with special Indian masalas. Served with 3 Theplas. Topped with Coriander. Allergen information: Contains Gluten & Dairy."
      },
      {
        day:"Friday",
        img:"https://ik.imagekit.io/curefoods/image/singles/eat/meals/EAT6659/primary/2_1_t.jpg",
        meal:"Palak Paneer With Thepla",
        description:"Kadhai Paneer, Bhindi, Paratha Thali"
      },
      {
        day:"Saturday",
        img:"https://ik.imagekit.io/curefoods/image/singles/eat/meals/EAT6679/primary/2_1_t.jpg",
        meal:"Kadhai Paneer, Soya Masala Sabzi, Paratha Thali",
        description:"A flavourful paratha thali! Enjoy scoops of soft whole wheat paratha with flavourful kadhai paneer and chewy tasty soya masala sabzi. Served with salad and pickle. Allergen information: Gluten, dairy, nuts, seeds, soy."
      },

    ]
  })
  const [activeDay , setActiveDay] = useState("Sunday");
  const [meal,setMeal] = useState(mealData.menu[0].meal);
  const [description,setDescription] = useState(mealData.menu[0].description);
  const [image, setImage] = useState(mealData.menu[0].img)
  const  handleActive = (item)=>{
    // console.log(day)
    setActiveDay(item.day)
    setMeal(item.meal)
    setDescription(item.description)
    setImage(item.img);
  }
  // const todayDate = new Date(Date.now()).toLocaleString("default",{month:"short"})
  return (
    <div>
      <div className='mealImage' style={{height:'380px'}}>
        <img src={image} alt={mealData.name} className='h-full w-full rounded-lg overflow-hidden'/>
      </div>
      <div className='py-4'>
        <h2 className='font-semibold text-xl py-4'>Weakly Meal Plans</h2>
        <div className='overflow-x-auto flex gap-6 h-36'>
          {mealData.menu.map((item) =>(
            <div>
              <div className={`w-28 h-28 flex flex-col p-1 rounded-lg flex-shrink-0 cursor-pointer ${activeDay === item.day ? 'border-2 border-slate-900':''}`} onClick={() =>handleActive(item)}>
                <img src={item.img} alt={item.day} className='h-full w-full rounded-lg overflow-hidden'/>
                <h5 className='text-center font-semibold'>{item.day}</h5>
              </div>
            </div>
          ))}
        </div>
        {/* <h5>{day} </h5> */}
        <div className= 'flex flex-col gap-4 py-4 h-40'>
          <h3 className='font-semibold'>{meal}</h3>
          <p className='text-gray-500'>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default MealDetail
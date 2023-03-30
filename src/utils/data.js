import sliderImage1 from "././../assets/images/slider/pexels-karolina-grabowska-4239036.jpg";
import sliderImage2 from "././../assets/images/slider/pexels-karolina-grabowska-4239146.jpg";
import sliderImage3 from "././../assets/images/slider/pexels-karolina-grabowska-4239130.jpg";
import sliderImage4 from "././../assets/images/slider/pexels-tima-miroshnichenko-6195125.jpg";
import sliderImage5 from "././../assets/images/slider/pexels-tima-miroshnichenko-6195277.jpg";


import jane from "././../assets/images/staff/pexels-andrea-piacquadio-774909.jpg";
import jenny from "././../assets/images/staff/pexels-monstera-5384445.jpg";
import robert from "././../assets/images/staff/pexels-monstera-5876695.jpg";
import cody from "././../assets/images/staff/pexels-ono-kosuki-6000065.jpg";
import darlene from "././../assets/images/staff/pexels-pixabay-220453.jpg";

const BANNER_SLIDER_IMAGES = [sliderImage1, sliderImage2, sliderImage3, sliderImage4, sliderImage5];
const STAFF = [
    {
        image:jane,
        name: "Jane Cooper",
        years_of_experience: 5
    },
    {
        image:robert,
        name: "Jenny Wilson",
        years_of_experience: 3
    },
    {
        image:darlene,
        name: "Robert Fox",
        years_of_experience: 3
    },
    {
        image:jenny,
        name: "Cody Fisher",
        years_of_experience: 10
    },
    {
        image:cody,
        name: "Darlene Robertson",
        years_of_experience: 2
    }
];
const SERVICES = [
    {
        name: "General cleaning",
        addition_services: [
            "Washing inside the refrigerator",
            "Washing inside the microwave",
            "Washing inside the hood",
            "Washing inside the oven"
        ]
    },
    {
        name: "Maintenance cleaning",
        addition_services: [
            "Washing inside the refrigerator",
            "Washing inside the microwave",
            "Washing inside the hood",
            "Washing inside the oven"
        ]
    },
    {
        name: "Dry cleaning of furniture",
        addition_services: [
            "Washing inside the refrigerator",
            "Washing inside the microwave",
            "Washing inside the hood",
            "Washing inside the oven"
        ]
    }
];
export const UNOMA_DATA = {BANNER_SLIDER_IMAGES, STAFF, SERVICES};
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Heading from "./Heading";
import Card from "./Card";
function App() {
  const cards = [
    {
      plan: "FREE",
      price: 0,
      features: [
        {
          name: "Single User ",
          enable : true
        },
        {
          name: "50 GB Storage",
          enable : true
        },
        {
          name: "Unlimited Public Projects",
          enable : true
        },
        {
          name: "Community Access",
          enable : true
        },  
        {
          name: "Unlimated Private Projects",
          enable : false
        },
        {
          name: "Dedicated Phone support",
          enable : false
        },
        {
          name: "Free Subdomain",
          enable : false
        },
        {
          name: "Monthly status Report",
          enable : false
        },
      ],
    },
    {
      plan: "PLUS",
      price: 9,
      features: [
        {
          name: "5 users",
          enable : true
        },
        {
          name: "50GB storage",
          enable : true
        },
        {
          name: "Unlimited Public Projects",
          enable : true
        },
        {
          name: "Community Access",
          enable : true
        }, 
        {
          name: "Unlimated Private Projects",
          enable : true
        },
        {
          name: "Dedicated Phone support",
          enable : true
        },
        {
          name: "Free Subdomain",
          enable : true
        },
        {
          name: "Monthly status Report",
          enable : false
        },
       
       
      ],
    },
    {
      plan: "PRO",
      price: 49,
      features: [
        {
          name: "5 users",
          enable : true
        },
        {
          name: "50GB storage",
          enable : true
        },
        {
          name: "Unlimited Public Projects",
          enable : true
        },
        {
          name: "Community Access",
          enable : true
        }, 
        {
          name: "Unlimated Private Projects",
          enable : true
        },
        {
          name: "Dedicated Phone support",
          enable : true
        },
        {
          name: "Free Subdomain",
          enable : true
        },
        {
          name: "Monthly status Report",
          enable : true
        },
       
      ],
    },
  ];
  return (
    <div className="container"> 
      <Heading />
      <main>
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-bg-primary p-3 text-center">
          {cards.map((card, index) => {
            return <Card key={index} card={card} />;
          })}
        </div>
      </main>
      
    </div>
  );
}

export default App;
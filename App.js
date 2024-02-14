import React from "react";
import Card from './Components/Card';
import Data from "./Data.json"
import Card2 from './Components/Card2';
import 'bootstrap/dist/css/bootstrap.min.css';
import State from './State';
import Conditional_rendering from './Conditional_rendering/index';
import Even_Handeler_class from './Even_Handeler_class/index'

const User = [
    {
        Name: "Anisul",
        Age: 24,
        Phone:[{
            Home: "0195455665255",
            Ofiice:"01735596466"

            }]
    },
    {
        Name: "Anisul2",
        Age: 25,
        Phone: [{
            Home: "0195455665255",
            Ofiice: "01735596466"

        }]
    },
    {
        Name: "Anisul3",
        Age: 26,
        Phone: [{
            Home: "0195455665255",
            Ofiice: "01735596466"



        }]
    }
    ]

function App() {
    let items = [];
    items = Data.map((item) => < Card heder={item.title} Des={item.des} Fotter="Card Fotter" />)
    return <div>
        <Even_Handeler_class/>
        <Conditional_rendering/>
        <State/>
        <h1 className="card">Hello</h1>
        <Card2 Name="Motaleb" />
        {items}
        {User.map((user, index) => <article key={index}>
            <h2>{user.Name}</h2>
            <h3>{user.Age}</h3>
            {user.Phone.map((phone, index) => <div key={index}>
                <p>{phone.Home}</p>
                <p>{phone.Ofiice}</p>

            </div>)}
            
        </article>)}
    </div>
}
export default App;
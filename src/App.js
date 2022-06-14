import React, {
    useState
} from 'react'
import './App.css';
import To from './compo/To';

export default function App() {

    const [item, setitem] = useState();
    const [itemarray, setitemarray] = useState([]);

    const inputdata = (event) => {
        setitem(event.target.value);
    }

    const show = () => {
        console.log("click button ");

        setitemarray((olditem) => {
            return [...olditem, item];
        });
        setitem("");
    }

    // for delete elemet

    const delet = (id) => {
        console.log("click here ");

        setitemarray((olditem)=>
        {
            return olditem.filter((arrelement,index)=>
            {
                return index !== id ;
            });
        }); 
    }

    return (

        <div className="d-flex justify-content-center" >
            <diV className="center " >
                <br />
                <h1> Todo list </h1>
                <br />

                <input placeholder="enter your text"
                    value={
                        item
                    }
                    onChange={
                        inputdata}
                    placeholder="enter your text"/>
                <button onClick={show} > + </button>


                <ol className="chan" > 
                {/* here crete a new component */} 
                {
                    // map function for iterate whole array 
                        itemarray.map((val, index) => {
                            return <To
                                text={val}
                                // if we use map function it is mandatory to use key 
                                key={index}
                                // id for uniquly identifiy array element 
                                id={index} 

                                // pass function as props for to component
                                onSelect={delet}
                            />
                        })
                }
                </ol>

            </diV>
        </div >
    )
}
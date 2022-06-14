import React,{useState} from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import "../App.css";

export default function To(props) {
    const [line, setline] = useState(false)
    const [count,setcount]=useState(0);
    const dele=()=>
    {
        setline(true)
        setcount(count-1)

    }


    return (
        <>
            <div>
                <span onClick={dele}> {props.id} </span>
                <li style={{textDecoration: line?"line-through":"none",width:138}}>{props.text}</li>
                <button onClick={() => { props.onSelect(props.id) }} className="cng" ><DeleteIcon/></button>

            </div>
        </>
    )
}

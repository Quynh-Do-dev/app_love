import {useEffect,useState} from "react";
import {db} from "../configFirebase/config";
import {collection, addDoc} from "firebase/firestore"
function ContainerPage(){
    const [date,setDate] = useState(new Date().toString());

    const handleDate=() => {
            console.log(new Date())
    }
    return (
        <div className="container">
            <div className="title-message">
                {/*{date}*/}
            </div>
            <div className="items-date">
                <div className="items"></div>
                <div className="items"></div>
                <div className="items"></div>
                <div className="items"></div>
            </div>
        </div>
    )
}
export default ContainerPage
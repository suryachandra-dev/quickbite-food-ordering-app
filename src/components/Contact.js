import { useEffect } from "react";
const Contact=()=>{
    useEffect(()=>{
console.log('use Effect Called');
const timer=setInterval(()=>{
    console.log('set Interval');
},1000)
return (()=>{
    clearInterval(timer);
    console.log('Component will unmount called');
})
    },[])
    return (
        <>
        <h1 className="text-3xl p-4 m-4 ">Contact Us Page</h1>
        <form>
            <input type="text" className="border border-black p-2 m-2" placeholder="Name"/>
            <input type="text" className="border border-black p-2 m-2" placeholder="Message"/>
            <button className="border border-black p-2 bg-gray-100 rounded-lg" placeholder="Submit">Submit</button>
        </form>
        </>
    )
}
export default Contact;
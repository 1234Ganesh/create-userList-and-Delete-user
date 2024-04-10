import './index.css'

const UserProfile = props => {
    const {userDetails, onDeleteUser} = props
    const{name, uniqueNo, role, imageUrl} = userDetails
   const onDelete = () =>{
    onDeleteUser(uniqueNo)
   }
    return(
       <li className='container'>
        <img src = {imageUrl} className = 'img' alt ='name'/>
        <div>
            <h1 className ='heading'> {name} </h1>
            <p className ='des'> {role} </p>
        </div>
        <button className ='delete-btn' onClick ={onDelete} ><img src ="https://assets.ccbp.in/frontend/react-js/cross-img.png" className='img-2' alt='cross' /></button>
       </li>
    )
}

export default UserProfile
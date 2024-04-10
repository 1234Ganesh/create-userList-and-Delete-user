import {Component} from 'react'
import UserProfile from './components/UserProfile';
import './App.css';

const intialUserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Backend Developer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Java Developer',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Web Devloper',
  },
  {
    uniqueNo: 5,
    imageUrl: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/316600/316605.png',
    name: 'Virat Kohli',
    role: 'Businessman',
  },
]

class App extends Component{
  state={
    searchInput:"",
    userDetailsList: intialUserDetailsList,
  }

  onSearchInput = (event) => {
    this.setState({ searchInput: event.target.value })
  }

  onDeleteUser=(uniqueNo)=>{
    const {userDetailsList}  =this.state
    const filteredData = userDetailsList.filter( eachUser =>
      eachUser. uniqueNo !== uniqueNo,
      )
      this.setState({ userDetailsList: filteredData})

  }
  render(){
    const {searchInput, userDetailsList} = this.state
    const searchResult = userDetailsList.filter (eachUser =>
      eachUser.name.toLocaleLowerCase().includes(searchInput),
    )
    return(
      <div className='container-app'>
        <h1>User List</h1>
        <input type ='search' onChange = {this.onSearchInput} value = {searchInput}/>
        <div className ='container'>
        <ul>
          {searchResult.map(eachUser => (
            <UserProfile userDetails = {eachUser} key = {eachUser.uniqueNo} onDeleteUser = { this.onDeleteUser }/>))}
        </ul>
        </div>
      </div>
    )
  }
}

export default App;

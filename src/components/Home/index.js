import {Component} from 'react'
import BlogList from '../BlogList'
import './index.css'

const blogsList = [
  {
    id: 1,
    title: 'My first post',
    description: 'A high quality solution beautifully designed for startups',
    publishedDate: 'Aug 2nd',
  },
  {
    id: 2,
    title: 'My second post',
    description:
      'A high quality solution beautifully designed for startups and Bussiness schools',
    publishedDate: 'Mar 1st',
  },
  {
    id: 3,
    title: 'My third post',
    description: 'A high quality solution beautifully designed for startups',
    publishedDate: 'Jan 2nd',
  },
  {
    id: 4,
    title: 'My fourth post',
    description:
      'A high quality solution beautifully designed for startups and Bussiness schools. ',
    publishedDate: 'Dec 24th',
  },
  {
    id: 5,
    title: 'My fifth post',
    description: 'A high quality solution beautifully designed for startups',
    publishedDate: 'Nov 10th',
  },
]

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <img
          className="profile"
          src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
          alt="profile"
        />
        <h1 className="profile-name">Wade Warren</h1>
        <p className="role">Software Developer at UK</p>
        <BlogList blogs={blogsList} />
      </div>
    )
  }
}

export default Home

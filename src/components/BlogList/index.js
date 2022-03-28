// Write your JS code here
import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogs} = props
  return (
    <ul className="blog-list">
      {blogs.map(eachBlog => (
        <BlogItem blogDetails={eachBlog} key={eachBlog.id} />
      ))}
    </ul>
  )
}

export default BlogList

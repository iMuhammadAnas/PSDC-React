import BlogCard from './BlogCard'
import { blogData } from '../appData/blog'


const BlogList = () => {
  return (
    <div>
      {blogData.map((blog, index) => (
        <BlogCard
          key={index}
          src={blog.src}
          title={blog.title}
          shortDecription={blog.shortDescription}
        />
      ))}
    </div>
  )
}

export default BlogList

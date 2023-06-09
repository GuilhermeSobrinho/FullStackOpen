import React , { useState } from 'react'
import PropTypes from 'prop-types'

const Blog = (props) => {
  const blog = props.blog
  const [blogObject, setBlogObject] = useState(blog)
  const [visible, setVisible] = useState(false)
  const showWhenVisible = { display: visible ? '' : 'none' }

  

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  const buttonLabel = visible ? 'hide' : 'view'

  const increaseLikes = () => {
    const updatedBlog = ({
      ...blog,
      likes: blog.likes + 1
    })
    props.updateBlog(updatedBlog)
    setBlogObject(updatedBlog)
  }

  const removeBlog = () => props.deleteBlog(blog)

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  const removeButton = {
    background: "#0091C6"
  }

  return (
    <div style={blogStyle} className='blog'>
      <div>
        {blog.title} <button onClick={toggleVisibility}>{buttonLabel}</button>
      </div>
      <div style={showWhenVisible}>
        <a href={blog.url}>{blog.url}</a>
        <div>likes { blogObject.likes } <button id='like-button' onClick={increaseLikes}>like</button></div>
        <div>{blog.author} </div>
        <button id='remove' style={removeButton} onClick={removeBlog}>remove</button>
      </div>
    </div>
  )
}

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  updateBlog: PropTypes.func.isRequired,
  deleteBlog: PropTypes.func.isRequired
}

export default Blog
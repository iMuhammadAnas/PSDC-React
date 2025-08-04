interface BlogProps {
    title: string
    shortDecription: string
    src: string
}

const BlogCard = ({title, shortDecription, src} : BlogProps) => {
    return (
        <div className="container">
            <img src={src} alt={title} />
            <h2>{title}</h2>
            <p>{shortDecription}</p>
        </div>
    )
}

export default BlogCard
const  Flickr = ({ media, link, title, author, description, tags }) => {
    const formatHTML = () => {
        return ({
            __html: description 
        })
    }
    return (
        <div className='flickr'>
            <img className='image' src={media}></img>
            <div className='text'>
                <div><a href={link}>{title}</a> by <a href={link}>{author}</a></div>
                
                <div><b>Description:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div>
                <div><b>Tags:</b> {tags}</div>
            </div>
        </div>
    )
}

export default Flickr


import { Fragment } from 'react'
import Flickr from './Flickr.js'

const Flickrs = ({flickrs}) => {
    return (
        <>
            {flickrs.map((flickr, index) => <Flickr key={index} 
                                             media={flickr.media.m} 
                                             link={flickr.link}
                                             title={flickr.title}
                                             author={flickr.author}
                                             description={flickr.description}
                                             tags ={flickr.tags} />  )}
        </>
    )
}

export default Flickrs

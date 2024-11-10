import './Writer.css';

function Writer({link, name, img, years, works}){
    return(
        <>
        <a className='link' href={link}>
        <div className='writer'>
            <h3>{name}</h3>
            <img className='photo' src={img}/>
            <h4>{years}</h4>
            <p>{works}</p>
        </div>
        </a>
        </>
    );
}

export default Writer;
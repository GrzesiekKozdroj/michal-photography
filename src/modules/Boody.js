
const slider = slide => {
    if(slide.strater){
        return (<div className="mich-name"><h1>MICHAL BONIECKI</h1><h4>A Photograph.</h4></div>)
    } else if(slide.header && slide.text && slide.image){
        const {header, text, image} = slide
        return(
            <div className="slide people">
                <img className="boode-img" src={image} />
                <div className="nfo">
                    <h3>{header}</h3>
                    <p>{text}</p>
                    <div className="button" >GALLERY</div>
                </div>
            </div>
        )
    }
}

export default (props) => {
    const {sliderIndex, slides} = props
    return (
        <div className="body">
            {
                slider(slides[sliderIndex])
            }
        </div>
    )
}
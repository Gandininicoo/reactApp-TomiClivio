function ImgResponsive(props){
    return(
        <source
            media={props.media}
            srcSet={props.srcSet}
            sizes={props.imgSize}
        />          
    )
}
export default ImgResponsive
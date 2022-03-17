import React from "react";

class ImageCard extends React.Component {
    constructor(props){
        super(props);

        this.state = { spans:0 };

        this.imageRef = React.createRef();
    }

    componentDidMount(){
        const height = this.imageRef.current.addEventListener('load', this.setSpans);

        const spans = Math.ceil(height / 10);

        this.setState({ spans });
    }

    setSpans = () => {
        console.log(this.imageRef.current.clientHeight);
    }

    render (){
        const {description, urls} = this.props.image;
        return(
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img ref={this.imageRef} alt={description} src={urls.regular}></img>
            </div>
        );
    }
}

export default ImageCard;
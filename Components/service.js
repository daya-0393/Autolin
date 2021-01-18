import React, {Component} from 'react';

class Service extends Component{

    constructor(props){
        super(props)
    }

    state = {
        imgs:{
            "1": "images/services/pintura.jpg",
            "2": "images/services/mantenimiento.jpg",
            "3": "images/services/lubricentro.jpg",
            "4": "images/services/ac.jpg",
            "5": "images/services/llanta.jpg",
            "6": "images/services/muflas.jpg",
            "7": "images/services/lavado.jpg"
        },
        heading: "",
        url: "",
        paragraph: ""
    }

    /*static getDerivedStateFromProps(props, state){
        console.log("secondMethod", props, state)
        return state
    }*/

    setMainElements = (type)=>{
        switch (type) {
            case "1":
                this.setState({url: this.state.imgs[1] });
                this.setState({heading: "Enderezado y pintura"}); 
                this.setState({paragraph: "Nulla tristique ullamcorper neque, non mollis purus porta non. Proin sed purus sed sapien lobortis sagittis. Curabitur tellus nibh, posuere ac varius sed, vestibulum sed nunc."})
                break;
            case "2":
                this.setState({url: this.state.imgs[2] });
                this.setState({heading: "Mecánico general"});
                this.setState({paragraph: "Vivamus sed sapien sagittis, auctor elit eu, cursus neque. Nunc tincidunt luctus leo. Pellentesque ac bibendum lorem. Vestibulum maximus libero sit amet lectus pharetra maximus. Vivamus eget pharetra nulla."})
                break;
            case "3":
                this.setState({url: this.state.imgs[3] });
                this.setState({heading: "Lubricentro"});
                this.setState({paragraph: "Aenean sit amet ullamcorper turpis. Ut turpis justo, dictum eu orci sit amet, fringilla venenatis nisi. Aliquam nisl odio, rutrum in leo vel, posuere rutrum sapien. Morbi nulla mauris, consectetur vitae sem eu, tincidunt feugiat metus. "})
                break;
            case "4":
                this.setState({url: this.state.imgs[4] });
                this.setState({heading: "Aire acondicionado"});
                this.setState({paragraph: "Nam est risus, mattis eu scelerisque eu, euismod commodo mi. Duis molestie enim non enim eleifend, id luctus odio sollicitudin. Maecenas efficitur fringilla sapien, et viverra nibh vestibulum et."})
                break;
            case "5":
                this.setState({url: this.state.imgs[5] });
                this.setState({heading : "Llantera y tramado"});
                this.setState({paragraph: "Etiam dolor justo, tincidunt in luctus sit amet, volutpat sed sapien. Curabitur pretium accumsan hendrerit. Suspendisse dapibus lobortis sagittis. "})
                break;
            case "6":
                this.setState({url: this.state.imgs[6] });
                this.setState({heading : "Muflas"});
                this.setState({paragraph: "Pellentesque eu fermentum ex, id faucibus elit. Donec id volutpat libero. Vivamus et laoreet justo. Suspendisse ullamcorper rhoncus turpis vel congue. Vestibulum vitae augue metus."})
                break;
            case "7":
                this.setState({url: this.state.imgs[7] });
                this.setState({heading : "Auto lavado"});
                this.setState({paragraph: "Donec rhoncus id arcu eget porta. Donec vel massa urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis at dolor a quam bibendum viverra. Pellentesque vel tincidunt magna. "})
                break;
        }
    }

    render(){
        this.setMainElements("2");
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <img src={`${this.state.url}`}></img>
                    </div>
                    <div className="col">
                        <h1>{`${this.state.heading}`}</h1>
                        <p>{`${this.state.paragraph}`}</p>
                    </div>
                </div>
            </div>
        )
    }

}

export default Service;
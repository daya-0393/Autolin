import cn from 'classnames'
import styles from './gallery.module.css'

export default function Gallery() {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="/images/gallery/carro3.jpg" className="d-block w-100" alt="..."></img>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </a>
            <div className={cn("row", styles.imagesList)}>
                <div className={cn("col-md-3", styles.item)}>
                    <img src="/images/gallery/carro2.jpg"></img>
                </div>
                <div className={cn("col-md-3", styles.item)}>
                    <img src="/images/gallery/carro1.jpg"></img>
                </div>
                <div className={cn("col-md-3", styles.item)}>
                    <img src="/images/gallery/carro4.jpg"></img>
                </div>
                <div className={cn("col-md-3", styles.item)}>
                    <img src="/images/gallery/carro5.jpg"></img>
                </div>
            </div>
        </div>
    )
}
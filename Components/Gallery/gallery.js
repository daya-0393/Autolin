
import ImageGallery from 'react-image-gallery';
import styles from './gallery.module.css'


export default function Gallery(){
    const images = [];

    for(var i= 1; i<=13; i++){
      images.push(
        {original:`/images/gallery/carro${i}.jpeg`,
         thumbnail:`/images/gallery/carro${i}.jpeg`,
        });
    }
    
    return(
        <div className={styles.container}>
            <ImageGallery items={images}/>
        </div>
    )
}


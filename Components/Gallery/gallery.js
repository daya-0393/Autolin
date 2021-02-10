
import ImageGallery from 'react-image-gallery';
import styles from './gallery.module.css'


export default function Gallery(){
    const images = [];

    for(var i= 1; i<=12; i++){
      images.push(
        {original:`/images/gallery/carro${i}.webp`,
         thumbnail:`/images/gallery/carro${i}.webp`,
        });
    }
    
    return(
        <div className={styles.container}>
            <ImageGallery items={images}/>
        </div>
    )
}


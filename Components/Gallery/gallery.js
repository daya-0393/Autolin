
import ImageGallery from 'react-image-gallery';



export default function Gallery(){
    const images = [];

    for(var i= 1; i<=13; i++){
      images.push(
        {original:`/images/gallery/carro${i}.jpeg`,
         thumbnail:`/images/gallery/carro${i}.jpeg`,
        });
    }
    console.log(images);
    
    /*[
        {
          original: '/images/gallery/',
          thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
          original: 'https://picsum.photos/id/1015/1000/600/',
          thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
          original: 'https://picsum.photos/id/1019/1000/600/',
          thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
    ];*/

    return(

        <ImageGallery items={images} />
    )
}


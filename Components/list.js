import cn from 'classnames'
import styles from '../styles/service.module.css'
import {useState, useRef, useEffect} from 'react'

export default function List(props){
    const [description, setDescription] = useState(false);
    const [itemSelected, setItemSelected] = useState();
    const [htmlCollection, setHtmlCollection] = useState();
    const [selected, setSelected] = useState();
    const [show, setShow] = useState(false);
    const list = useRef();

    const onItemClicked = (element) =>{
        const x = list.current.children;
        Array.from(x).forEach((item, index) =>{
            item.children[1].classList.add('hidden');
        });
        setSelected(element.children[1]);
    }

    useEffect(()=>{
        if(selected !== undefined){
            selected.classList.remove('hidden');
        }
    })


    const htmlList = props.list.map((item, index)=>{

        return(
            <div className={cn("shadow", styles.listItem)}  key={index} accessKey={index} onClick={(e)=>{onItemClicked(e.currentTarget)}}>
                <h5>{item}</h5>
                <div className={cn("hidden", styles.description)}>
                    <p>
                        {props.itemDesc[index]}
                    </p>
                </div> 
                <div className={styles["fas-btn"]}>
                    <i className={cn("fas fa-angle-double-down", styles.fas)} aria-hidden></i>
                </div>
            </div>
        )
    })


    return(
        <div className={styles.list} ref={list}>
            {htmlList}
        </div>
    )
}
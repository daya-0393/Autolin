import cn from 'classnames'
import styles from '../styles/service.module.css'
import {useState, useRef, useEffect} from 'react'

export default function List(props){
    const [description, setDescription] = useState(false);
    const [itemSelected, setItemSelected] = useState();
    const [htmlCollection, setHtmlCollection] = useState();
    const [selected, setSelected] = useState();
    const [itemShown, setItemShown] = useState(false);
    const list = useRef();

    useEffect(()=>{
        console.log(itemShown);
        console.log(selected);
        if(itemShown){
            selected.children[1].classList.remove('hidden');
        }else if(itemShown == false && selected !== undefined){
            selected.children[1].classList.add('hidden');
            setSelected();
        }
    }, [itemShown])
    

    const onItemClicked = (element) =>{
        console.log("entro");
        if(itemShown){
            if(element === selected){
                setItemShown(false);
            }else{
                setItemShown(false);
            }
        }else if(itemShown == false){
            setItemShown(true);
            setSelected(element);
        }
    }

    /*const resetToDefaultValues =()=>{
        setSelected(undefined);
    }

    const hideDescription = ()=>{
        const x = list.current.children;
        Array.from(x).forEach((item) =>{
            item.children[1].classList.add('hidden');
        });
    }*/


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
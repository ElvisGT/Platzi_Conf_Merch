import React,{useRef} from 'react';


const Search = ({search,setSearch}) => {
    const searchInput = useRef(search);


    const HandleChange = () =>{
        setSearch(searchInput.current.value);
    }


    return (
        <React.Fragment>
            <input type="text" onChange={HandleChange} value={search} ref={searchInput} placeholder="Teclee lo que desea comprar"/>
        </React.Fragment>

    );
}

export {Search};
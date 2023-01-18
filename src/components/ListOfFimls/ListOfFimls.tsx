import React, {FC} from 'react';
import styles from './ListOfFimls.module.css';
import Pagination from "./Pagination/Pagination";
import Сheckbox from "../Сheckbox/Сheckbox";
import {dataCheckbox} from "../../utils/constants/dataCheckbox.constants";


interface ListOfFimlsProps {
}

const ListOfFimls: FC<ListOfFimlsProps> = () => (
    <div className={styles.ListOfFimls}>
        <p className={styles.Title}>Фильтры:</p>
        <button className={styles.Reset}>Сбросить все фильтры</button>


        <form className={styles.Sort}>
            <label htmlFor="sort-film">Сортировка по:</label>
            <select name="city" id="sort-film">
                <option value="">-- Выберите сортировку --</option>
                <option value="1">Популярные</option>
                <option value="2">Популярные</option>
                <option value="3">Популярные</option>
            </select>
        </form>


        <form className={styles.Sort}>
            <label htmlFor="sort-film">Год релиза:</label>
            <select name="city" id="sort-film">
                <option value="">-- Выберите год релиза --</option>
                <option value="petersburg">2023</option>
            </select>
        </form>

        <fieldset>
            {dataCheckbox.map(({id , name})=> <Сheckbox key={id} name={name}/>)}
        </fieldset>

        <Pagination/>
    </div>
);

export default ListOfFimls;
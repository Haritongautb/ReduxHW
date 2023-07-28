import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHttp } from "../../hooks/http.hook";
import { v4 as uuidv4 } from 'uuid';
import { newHeroCreated } from "../../actions";

// Задача для этого компонента:
// Реализовать создание нового героя с введенными данными. Он должен попадать
// в общее состояние и отображаться в списке + фильтроваться
// Уникальный идентификатор персонажа можно сгенерировать через uiid
// Усложненная задача:
// Персонаж создается и в файле json при помощи метода POST
// Дополнительно:
// Элементы <option></option> желательно сформировать на базе
// данных из фильтров

const HeroesAddForm = () => {
    const [newHero, setNewHero] = useState({
        name: "",
        description: "",
        element: "",
        id: null
    })

    const { filterButtonsLoadingStatus, filterButtonsData } = useSelector(state => state);

    const dispatch = useDispatch();
    const { request } = useHttp();

    const onAddNewHero = (event) => {
        event.preventDefault();
        event.target.disabled = true;
        if (event && event.target) {
            const rndID = uuidv4();
            request("http://localhost:3001/heroes", "POST", JSON.stringify({ ...newHero, id: rndID }))
                .then(heroCreated => dispatch(newHeroCreated(heroCreated)))
                .then(() => setNewHero({
                    name: "",
                    description: "",
                    element: "",
                    id: null
                }))
                .then(() => event.target.disabled = false)
                .catch(e => console.log(e))
        }
    }

    const onInput = (event) => {
        setNewHero(newHero => ({ ...newHero, [event.target.name]: event.target.value }))
    }

    const renderFilters = (arr, loadingStatus) => {
        if (loadingStatus === "load") {
            return <option>Загрузка элементов</option>
        } else if (loadingStatus === "error") {
            return <option>Ошибка загрузки</option>
        }

        return arr.map(item => {
            if (item.element === "all") {
                return;
            }
            return <option key={item.element} value={item.element}>{item.label}</option>
        })
    }

    const elements = renderFilters(filterButtonsData, filterButtonsLoadingStatus);
    return (
        <form className="border p-4 shadow-lg rounded">
            <div className="mb-3">
                <label htmlFor="name" className="form-label fs-4">Имя нового героя</label>
                <input
                    required
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Как меня зовут?"
                    value={newHero.name}
                    onChange={onInput} />
            </div>

            <div className="mb-3">
                <label htmlFor="text" className="form-label fs-4">Описание</label>
                <textarea
                    required
                    name="description"
                    className="form-control"
                    id="text"
                    placeholder="Что я умею?"
                    style={{ "height": '130px' }}
                    value={newHero.description}
                    onChange={onInput} />
            </div>

            <div className="mb-3">
                <label htmlFor="element" className="form-label">Выбрать элемент героя</label>
                <select
                    required
                    className="form-select"
                    id="element"
                    name="element"
                    value={newHero.element}
                    onChange={onInput}>
                    <option >Я владею элементом...</option>
                    {elements}
                </select>
            </div>

            <button type="submit" className="btn btn-primary" onClick={onAddNewHero}>Создать</button>
        </form>
    )
}

export default HeroesAddForm;
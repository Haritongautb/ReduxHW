import { useEffect } from "react";
import { filterButtonsFetching, filterButtonsFetchingError, filterButtonsFetched, changeActiveButton } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { useHttp } from "../../hooks/http.hook";
import Spinner from "../spinner/Spinner";
// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом

const HeroesFilters = () => {
    const { filterButtonsLoadingStatus, filterButtonsData, activeFilterButton } = useSelector(state => state)
    const dispatch = useDispatch();
    const { request } = useHttp();

    useEffect(() => {
        updateFilterButtons();
    }, []);

    const updateFilterButtons = () => {
        dispatch(filterButtonsFetching());
        request("http://localhost:3001/filterButtonsData")
            .then(data => dispatch(filterButtonsFetched(data)))
            .catch(() => dispatch(filterButtonsFetchingError()))
    }

    if (filterButtonsLoadingStatus === "loading") {
        return <Spinner />;
    } else if (filterButtonsLoadingStatus === "error") {
        return <h5 className="text-center mt-5">Ошибка загрузки</h5>
    }

    const renderFilterButtons = (arr) => {
        if (arr.length === 0) {
            return <h5 className="text-center mt-5">Героев пока нет</h5>
        }

        return arr.map(item => {
            const active = activeFilterButton === item.element;
            const clazz = active ? `${item.buttonClassName} active` : item.buttonClassName;
            return <button key={item.element} className={clazz} onClick={() => onChangeActiveButton(item.element)}>{item.label}</button>
        })
    }

    const onChangeActiveButton = (activeButton) => {
        dispatch(changeActiveButton(activeButton))
    }

    const elements = renderFilterButtons(filterButtonsData);
    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Отфильтруйте героев по элементам</p>
                <div className="btn-group">
                    {elements}
                </div>
            </div>
        </div>
    )
}

export default HeroesFilters;
import { useState } from 'react';
import useDebounce from '../../../hooks/useDebounce';
import './style.css';

const SearchInput = ({value, onChange}) => {
    const [displayValue, setDisplayValue] = useState(value);
    const debouncedChange = useDebounce(onChange, 500);

    function handleChange({target}) {
        setDisplayValue(target.value);
        debouncedChange(target.value);
    }

    return (
        <>
            <div className="search">
                <form className="search__form">
                    <input
                        type="search"
                        value={displayValue}
                        name="search"
                        placeholder="Pesquisar personagem..."
                        onChange={handleChange}
                    />
                </form>
            </div>
        </>
    );
};

export default SearchInput;

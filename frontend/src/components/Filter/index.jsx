import { SelectInput, Option, FilterWrapper } from "./styles";
import P from "prop-types";

export const Filter = ({
  updateFilterValue,
  filterData,
  name,
  filterName,
  color,
}) => {
  return (
    <FilterWrapper onClick={updateFilterValue}>
      <SelectInput name={name} cor={color}>
        {filterData.map((curElem, index) => {
          return (
            <Option key={index} value={curElem} checkedColor={color}>
              {curElem === "all"
                ? `All ${name.charAt(0).toUpperCase() + name.slice(1)}`
                : curElem.includes(name)
                ? filterName.map((f) =>
                    f.url === curElem ? f.title || f.name : "",
                  )
                : curElem.charAt(0).toUpperCase() + curElem.slice(1)}
            </Option>
          );
        })}
      </SelectInput>
    </FilterWrapper>
  );
};

Filter.propTypes = {
  updateFilterValue: P.func,
  filterData: P.array,
  name: P.string,
  filterName: P.array,
  color: P.string,
};

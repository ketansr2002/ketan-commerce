import { useFilterContext } from "../context/filterContext";
import styled from "styled-components";
import { BsFillGridFill, BsList } from "react-icons/bs";

const Sort = () => {
  const { filter_products, grid_view, setGridView, setListView ,sorting} =
    useFilterContext();
  return (
    <Wrapper className="sort-section">
      <div className="sorting-list--grid">
        <button
          className={grid_view ? "sort-btn active" : "sort-btn"}
          onClick={setGridView}
        >
          <BsFillGridFill className="icon" />
        </button>
        <button
          className={grid_view ? "sort-btn" : "sort-btn active"}
          onClick={setListView}
        >
          <BsList className="icon" />
        </button>
      </div>
      <div className="product-data">
        <p>{`${filter_products.length} Products Available`}</p>
      </div>
      <div className="sort-selection">
        <form action="#">
          <label htmlFor="sort"></label>
          <select
            name="sort"
            id="sort"
            className="sort-selection--style"
            onClick={sorting}
          >
            <option value="lowest" className="sort-select--option">Price(lowest)</option>
            <option value="#" disabled className="sort-select--option"></option>
            <option value="highest" className="sort-select--option">Price(highest)</option>
            <option value="#" disabled className="sort-select--option"></option>
            <option value="a-z" className="sort-select--option">Price(a-z)</option>
            <option value="#" disabled className="sort-select--option"></option>
            <option value="z-a" className="sort-select--option">Price(z-a)</option>
          </select>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
  .sorting-list--grid {
    display: flex;
    gap: 2rem;
    .sort-btn {
      padding: 0.8rem 1rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    .icon {
      font-size: 1.6rem;
    }
    .active {
      background-color: ${({ theme }) => theme.colors.black};
      color: #fff;
    }
  }
  .sort-selection .sort-selection--style {
    padding: 0.5rem;
    cursor: pointer;
    .sort-select--option {
      padding: 0.5rem 0;
      cursor: pointer;
      height: 1.5rem;
      padding: 10px;
    }
  }
`;

export default Sort;

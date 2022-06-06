import { useFilter } from "../context/filter-context";
import '../Sidebar/Sidebar.css'
export const Sidebar = () => {
  const { state, dispatch } = useFilter();

  return (
    <aside className="sidebar">
      <div className="space-around">
        <h3>Filters</h3>
        <button className="clear-all-btn" onClick={() => dispatch({ type: "CLEAR_ALL" })}>
          CLEAR ALL
        </button>
      </div>
      <div className="sidebar-list">
        <div>
        <h3>Sort by</h3>
        <div>
          <input
            onChange={() => dispatch({ type: "HIGH_TO_LOW" })}
            name="sort"
            type="radio"
            checked={state.sorting === "HIGH_TO_LOW"}
          />
          <label htmlFor="">High to low</label>
        </div>
        <div>
          <input
            onChange={() => dispatch({ type: "LOW_TO_HIGH" })}
            checked={state.sorting === "LOW_TO_HIGH"}
            name="sort"
            type="radio"
          />
          <label htmlFor="">Low to high</label>
        </div>
        <div>
          <h3>Category</h3>
          <div>
            <label htmlFor="">
              <input
                onChange={() => dispatch({ type: "MENS" })}
                type="checkbox"
                checked={state.category.mens}
              />
              Mens
            </label>
          </div>
          <div>
            <label htmlFor="">
              <input
                onChange={() => dispatch({ type: "WOMENS" })}
                type="checkbox"
                checked={state.category.womens}
              />
              Womens
            </label>
          </div>
        </div>
        <div>
          <h3>Brand</h3>
          <div>
            <label htmlFor="">
              <input
                type="checkbox"
                checked={state.brand.TRIPR}
                onChange={() => dispatch({ type: "TRIPR" })}
              />
              TRIPR
            </label>
          </div>
          <div>
            <label htmlFor="">
              <input
                type="checkbox"
                checked={state.brand.AUSK}
                onChange={() => dispatch({ type: "AUSK" })}
              />
              AUSK
            </label>
          </div>
          <div>
            <label htmlFor="">
              <input
                type="checkbox"
                checked={state.brand.BLIVE}
                onChange={() => dispatch({ type: "BLIVE" })}
              />
              BLIVE
            </label>
          </div>
        </div>
        <div>
          <h3>Size</h3>
          <div>
            <label htmlFor="">
              <input
                type="checkbox"
                checked={state.size.s}
                onChange={() => dispatch({ type: "S" })}
              />
              S
            </label>
          </div>
          <div>
            <label htmlFor="">
              <input
                type="checkbox"
                checked={state.size.m}
                onChange={() => dispatch({ type: "M" })}
              />
              M
            </label>
          </div>
          <div>
            <label htmlFor="">
              <input
                type="checkbox"
                checked={state.size.l}
                onChange={() => dispatch({ type: "L" })}
              />
              L
            </label>
          </div>
          <div>
            <label htmlFor="">
              <input
                type="checkbox"
                checked={state.size.xl}
                onChange={() => dispatch({ type: "XL" })}
              />
              XL
            </label>
          </div>
        </div>
                </div>
      </div>
    </aside>
  );
};

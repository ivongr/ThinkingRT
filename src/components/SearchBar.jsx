export default function SearchBar({ filterText, inStockOnly,onFilterTextChange,onInStockOnlyChange}){
    return (
      <form>
        <input type="text" value={filterText} placeholder="Buscar..."
      /*Controlador de eventos */
      onChange={(e) => onFilterTextChange(e.target.value)}/>
        <label>
          <input type="checkbox"
          checked={inStockOnly} 
          onChange={(e) => onInStockOnlyChange(e.target.checked)}/>
          
          Solo productos en stock
        </label>
      </form>
    );
  }
export const filterReducer = (state, action) => {
  switch (action.type) {
    case "MENS":
      return {
        ...state,
        category: { ...state.category, mens: !state.category.mens },
      };
    case "WOMENS":
      return {
        ...state,
        category: { ...state.category, womens: !state.category.womens },
      };
    case "TRIPR":
      return { ...state, brand: { ...state.brand, TRIPR: !state.brand.TRIPR } };
    case "BLIVE":
      return { ...state, brand: { ...state.brand, BLIVE: !state.brand.BLIVE } };
    case "AUSK":
      return { ...state, brand: { ...state.brand, AUSK: !state.brand.AUSK } };
    case "HIGH_TO_LOW":
      return { ...state, sorting: "HIGH_TO_LOW" };
    case "LOW_TO_HIGH":
      return { ...state, sorting: "LOW_TO_HIGH" };
      case "S":
        return {...state,size:{...state.size,s:!state.size.s}}
      case "M":
        return {...state,size:{...state.size,m:!state.size.m}}
      case "L":
        return {...state,size:{...state.size,l:!state.size.l}}
      case "XL":
        return {...state,size:{...state.size,xl:!state.size.xl}}
        case "CLEAR_ALL":
          return {...state,
          category:{mens:false,womens:false},
          sorting:"",
          brand:{TRIPR:false,AUSK:false,BLIVE:false},
          size:{s:false,m:false,l:false,xl:false}}
    default:
      return state;
  }
};

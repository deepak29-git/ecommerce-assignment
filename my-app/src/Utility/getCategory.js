export const getCategory=(data,category)=>{
    let filteredArr=[];
    if(category.mens===false && category.womens===false){
        return data
    }
    if(category.mens){
       let newArr=data.filter(product=>product.category==="mens")
       filteredArr.push(...newArr)
    }if(category.womens){
        let newArr=data.filter(product=>product.category==="womens")
        filteredArr.push(...newArr)
    }
    return filteredArr
}